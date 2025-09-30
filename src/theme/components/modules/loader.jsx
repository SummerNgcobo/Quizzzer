import React from "react";
import {
  ModuleFields,
  TextField,
  RichTextField,
} from "@hubspot/cms-components/fields";
import styles from "../../styles/loader.module.css";

// ✅ Component
export function Component({ fieldValues }) {
  const { title, text } = fieldValues;

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      {title && <h3 className={styles.loaderTitle}>{title}</h3>}
      {text && <p className={styles.loaderText}>{text}</p>}
    </div>
  );
}

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
