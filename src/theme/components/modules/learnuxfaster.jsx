import React from "react";
import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import ScrollWord from "../islands/ScrollWord.tsx?island";

export function Component({ fieldValues }) {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
        boxSizing: "border-box",
      }}
    >
      <Island
        module={ScrollWord}
        fieldValues={{
          text: fieldValues.staticText || "Learn UX Faster",
        }}
      />
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="staticText"
      label="Full Text (last word will animate)"
      default="Learn UX Faster"
    />
  </ModuleFields>
);

export const meta = {
  label: "Learn UX Faster Section",
};
