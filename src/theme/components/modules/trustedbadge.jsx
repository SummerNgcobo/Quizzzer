import React from "react";
import trustedImg from "../../assets/styles/673ca070c1e72b0e0b2a10d3_trusted.webp";
import styles from "../../styles/trustedbadge.module.css";
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export function Badge({ text = "Trusted by 500k+ design & product professionals" }) {
  return (
    <div className={styles.badgeWrapper}>
      <img src={trustedImg} alt="Trusted Badge" className={styles.badgeImage} />
      <span className={styles.badgeText}>{text}</span>
    </div>
  );
}

// HubSpot-specific wrapper
export function Component({ fieldValues }) {
  return <Badge text={fieldValues?.headline} />;
}

export const fields = (
  <ModuleFields>
    <TextField
      name="headline"
      label="Badge Text"
      default="Trusted by 500k+ design & product professionals"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Trusted Badge Module',
};