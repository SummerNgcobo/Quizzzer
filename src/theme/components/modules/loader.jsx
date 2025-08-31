import React, { useEffect, useState } from "react";
import styles from "../../styles/loader.module.css";
import {
  ModuleFields,
  TextField,
  RichTextField,
} from "@hubspot/cms-components/fields";

// ✅ Loader component
export const Component = ({ title, text }) => {
  const [visible, setVisible] = useState(true);
  const [logo, setLogo] = useState(null);

  // HubDB configuration
  const HUBDB_TABLE_ID = 195285908754;
  const PORTAL_ID = 47574277;

  // Fetch logo from HubDB
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch(
          `https://api.hubapi.com/cms/v3/hubdb/tables/${HUBDB_TABLE_ID}/rows?portalId=${PORTAL_ID}`
        );
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();

        // Assuming your HubDB table has a row with logo data
        const logoRow = data.results?.[0];
        if (logoRow) {
          setLogo({
            src: logoRow.values?.logo_url || logoRow.values?.image?.url,
            alt: logoRow.values?.alt_text || "Company Logo",
          });
        }
      } catch (err) {
        console.error("HubDB logo fetch error:", err);
        // Fallback logo
        setLogo({
          src: "https://via.placeholder.com/150x50?text=Logo",
          alt: "Company Logo",
        });
      }
    };

    fetchLogo();
  }, []);

  // Hide loader when page is ready
  useEffect(() => {
    const hideLoader = () => setVisible(false);

    document.addEventListener("DOMContentLoaded", hideLoader);
    window.addEventListener("load", hideLoader);
    document.addEventListener("hsPageRenderReady", hideLoader);

    return () => {
      document.removeEventListener("DOMContentLoaded", hideLoader);
      window.removeEventListener("load", hideLoader);
      document.removeEventListener("hsPageRenderReady", hideLoader);
    };
  }, []);

  return (
    <div
      id="globalLoader"
      className={`${styles.globalLoader} ${
        visible ? styles.show : styles.hide
      }`}
    >
      {logo && <img src={logo.src} alt={logo.alt} className={styles.logo} />}
      <div id="globalLoaderTitle" className={styles.title}>
        {title}
      </div>
      <div id="globalLoaderText" className={styles.text}>
        {text}
      </div>
    </div>
  );
};

// ✅ HubSpot module fields
export const fields = (
  <ModuleFields>
    <TextField name="title" label="Loader Title" default="Loading..." />
    <RichTextField name="text" label="Loader Text" default="Please wait" />
  </ModuleFields>
);

// ✅ HubSpot module meta
export const meta = {
  label: "Page Loader",
  icon: "loading",
  category: "theme",
};
