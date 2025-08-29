import React from 'react';
import styles from '../../styles/cards.module.css';
import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
  ChoiceField
} from '@hubspot/cms-components/fields';

export const Cards = () => {
  return (
    <div className={styles.popupCardsContainer}>
      {/* Card 1 */}
      <div className={styles.popupCardSmall}>
        <img 
          src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/68769380ddfc1ad24f8d84c9_media.avif" 
          loading="lazy" 
          width="360" 
          height="360" 
          alt="Illustration" 
          className={styles.popupCardImg}
        />
        <div className={styles.popupCardHeadingWrapper}>
          <h3 className={styles.popupCardTitle}>Designed to help you learn faster</h3>
          <div className={styles.popupCardIcon}>
            <img 
              src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/673792b688d0236dd17aec99_Right%20icon.svg" 
              loading="lazy" 
              width="24" 
              height="24" 
              alt="Plus icon"
            />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className={styles.popupCardSmall}>
        <img 
          src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/67f59ac9db5d0a21dfb429d1_method-3.svg" 
          loading="lazy" 
          width="360" 
          height="360" 
          alt="Illustration" 
          className={styles.popupCardImg}
        />
        <div className={styles.popupCardHeadingWrapper}>
          <h3 className={styles.popupCardTitle}>Optimized for real career results</h3>
          <div className={styles.popupCardIcon}>
            <img 
              src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/673792b688d0236dd17aec99_Right%20icon.svg" 
              loading="lazy" 
              width="24" 
              height="24" 
              alt="Plus icon"
            />
          </div>
        </div>
      </div>

      {/* Card 3 with Animated Border */}
      <div className={`${styles.popupCardSmall} ${styles.animatedCard}`}>
        <div className={styles.animBorder}>
          <div className={styles.animBorderOverlay}></div>
        </div>
        <img 
          src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6876939fddfc1ad24f8da099_media%202.avif" 
          loading="lazy" 
          width="360" 
          height="360" 
          alt="Illustration" 
          className={styles.popupCardImg}
        />
        <div className={styles.popupCardHeadingWrapper}>
          <h3 className={styles.popupCardTitle}>Train alone or with your team</h3>
          <div className={styles.popupCardIcon}>
            <img 
              src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/673792b688d0236dd17aec99_Right%20icon.svg" 
              loading="lazy" 
              width="24" 
              height="24" 
              alt="Plus icon"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export const fields = (
  <ModuleFields>
    {/* Card 1 Fields */}
    <TextField
      name="card1Title"
      label="Card 1 Title"
      default="Designed to help you learn faster"
    />
    <ImageField
      name="card1Image"
      label="Card 1 Image"
      default={{
        src: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/68769380ddfc1ad24f8d84c9_media.avif",
        alt: "Learning illustration"
      }}
    />
    <TextField
      name="card1Alt"
      label="Card 1 Alt Text"
      default="Learning illustration"
    />

    {/* Card 2 Fields */}
    <TextField
      name="card2Title"
      label="Card 2 Title"
      default="Optimized for real career results"
    />
    <ImageField
      name="card2Image"
      label="Card 2 Image"
      default={{
        src: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/67f59ac9db5d0a21dfb429d1_method-3.svg",
        alt: "Career growth illustration"
      }}
    />
    <TextField
      name="card2Alt"
      label="Card 2 Alt Text"
      default="Career growth illustration"
    />

    {/* Card 3 Fields */}
    <TextField
      name="card3Title"
      label="Card 3 Title"
      default="Train alone or with your team"
    />
    <ImageField
      name="card3Image"
      label="Card 3 Image"
      default={{
        src: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6876939fddfc1ad24f8da099_media%202.avif",
        alt: "Team training illustration"
      }}
    />
    <TextField
      name="card3Alt"
      label="Card 3 Alt Text"
      default="Team training illustration"
    />
    <ChoiceField
      name="animateThirdCard"
      label="Animate Third Card?"
      default={true}
      choices={[
        { label: "Yes", value: true },
        { label: "No", value: false }
      ]}
      display="radio"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Feature Cards',
  icon: 'cards',
  category: 'marketing'
};