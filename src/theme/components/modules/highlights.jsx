import React from "react";
import styles from "../../styles/features.module.css";
import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from "@hubspot/cms-components/fields";

// ✅ 1. Define fields for HubSpot editor

export const meta = {
  label: "Highlights Section",
};
export const fields = (
  <ModuleFields>
    <TextField name="title1" label="Card 1 Title" default="400+ learning materials" />
    <RichTextField
      name="desc1"
      label="Card 1 Description"
      default="Courses, assessments, briefs, tutorials & more — with new releases every week."
    />
    <ImageField name="icon1" label="Card 1 Icon" />

    <TextField name="title2" label="Card 2 Title" default="Fits your busy schedule" />
    <RichTextField
      name="desc2"
      label="Card 2 Description"
      default="Learning that’s interactive, digestible, and just 5 minutes a day."
    />
    <ImageField name="icon2" label="Card 2 Icon" />

    <TextField name="title3" label="Card 3 Title" default="Build the right skills" />
    <RichTextField
      name="desc3"
      label="Card 3 Description"
      default="We help beginners, professionals, and switchers build real-world product skills."
    />
    <ImageField name="icon3" label="Card 3 Icon" />

    <TextField name="title4" label="Card 4 Title" default="Not sure where to start?" />
    <RichTextField
      name="desc4"
      label="Card 4 Description"
      default="Take our free career quiz, and get personalised learning plan."
    />
    <ImageField name="icon4" label="Card 4 Icon" />
    <TextField name="cta4" label="Card 4 CTA" default="Take the quiz →" />
  </ModuleFields>
);

// ✅ 2. Default export (React component)
export function Component (props) {
  return (
    <section className={styles.highlights}>
     <div className={styles.card}>
  <div className={styles.cardHeader}>
    <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/667ffc100f6524a2488c1636_Course.svg" alt="" />
    <h3>{props.title1}</h3>
  </div>
  <p>{props.desc1}</p>
</div>

<div className={styles.card}>
  <div className={styles.cardHeader}>
    <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/67059819b0e298aa397305ec_Clock.svg" alt="" />
    <h3>{props.title2}</h3>
  </div>
  <p>{props.desc2}</p>
</div>

<div className={styles.card}>
  <div className={styles.cardHeader}>
    <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6706d535594a80c28513c5e2_Skill-test.svg" alt="" />
    <h3>{props.title3}</h3>
  </div>
  <p>{props.desc3}</p>
</div>

<div className={styles.card}>
  <div className={styles.cardHeader}>
    <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6706d535594a80c28513c5e2_Skill-test.svg" alt="" />
    <h3>{props.title4}</h3>
  </div>
   <p className={styles.cardDescInline}>
    {props.desc4}{" "}
    {props.cta4 && (
      <a href="/quiz" className={styles.ctaInline}>
        {props.cta4}
      </a>
    )}
  </p>
</div>

    </section>
  );
}
