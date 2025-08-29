import {
  ModuleFields,
  TextField,
  RichTextField,
} from '@hubspot/cms-components/fields';
import { Navbar } from '../../components/modules/navbar';
import styles from '../../styles/home.module.css';
import React from "react";
import quizVideo from '../../assets/styles/QuizVid.mp4';
import { Badge } from '../../components/modules/trustedbadge'; 
import { Cards } from '../../components/modules/cards';




export function Component({ fieldValues }) {
  React.useEffect(() => {
  const tabLinks = document.querySelectorAll('[data-tab]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.getAttribute('data-tab');
      
      // Remove active class from all links and contents
      tabLinks.forEach(l => l.classList.remove(styles.isActive));
      tabContents.forEach(c => c.classList.remove(styles.isActive));
      
      // Add active class to clicked link and corresponding content
      link.classList.add(styles.isActive);
      document.querySelector(`[data-tab-content="${tabId}"]`).classList.add(styles.isActive);
    });
  });
}, []);
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
<main className={styles.heroSection}>
  <div className={styles.heroContent}>
    <div className={styles.badgeWrapper}>
    <Badge />
  </div>
    <h1 className={styles.title}>
      Learn <span className={styles.highlight}>UX & UI</span> skills, faster
    </h1>
    {/* <p className={styles.subtitle}>{fieldValues.subHeadline}</p> */}
    {/* <a href={fieldValues.ctaUrl} className={styles.ctaButton}>
      {fieldValues.ctaText}
    </a> */}
  </div>

  {/* Supporting text block on upper right */}
  <div className={styles.supportingBlock}>
    <p>
      Bite-sized, interactive learning for busy professionals — master design,<br></br>
      product, and AI-powered skills to stay<br></br> ahead in just 5 minutes a day.
    </p>
    <div className={styles.heroButtons}>
            <a href="/quiz" className={styles.heroCtaButton}>
              Get Started
            </a>
            <a href="/teams" className={styles.heroTeamsButton}>
              Uxcel for Teams
            </a>
          </div>
  </div>
</main>



      {/* VIDEO SECTION */}
      <section className={styles.videoSection}>
        <video
          className={styles.quizVideo}
          src={quizVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      
      </section>

      {/* TABS SECTION */}
<section className={styles.tabsContainer}>
  <div className={styles.tabsMenu}>
    <a data-tab="1" href="#" className={`${styles.tabsLink} ${styles.isActive}`}>
      <div className={styles.mobileHidden}>User Experience</div>
    </a>
    <a data-tab="2" href="#" className={styles.tabsLink}>
      <div className={styles.mobileHidden}>Product Management</div>
    </a>
    <a data-tab="3" href="#" className={styles.tabsLink}>
      <div className={styles.mobileHidden}>Artificial Intelligence</div>
    </a>
    <a data-tab="4" href="#" className={styles.tabsLink}>
      <div>Uxcel for Teams</div>
    </a>
  </div>

  <div className={`${styles.tabContent} ${styles.isActive}`} data-tab-content="1">
    <span className={styles.opacity60}>
     Accelerate your UX design career with guided, interactive learning. Learn key <br></br>skills faster at your own pace in just 5 minutes a day.
    </span>
    <a href="/ux-learning-experience" className={styles.purpleLink}>       Learn more → <br></br></a>
  </div>

  <div className={styles.tabContent} data-tab-content="2">
    <span className={styles.opacity60}>
      Grow your product management career with focused, five-minute lessons built for busy schedules.
    </span>
    <a href="/pm-learning-experience" className={styles.purpleLink}>Learn more →</a>
  </div>

  <div className={styles.tabContent} data-tab-content="3">
    <span className={styles.opacity60}>
      Learn how to use AI in real product workflows with short, hands-on lessons.
    </span>
  </div>

  <div className={styles.tabContent} data-tab-content="4">
    <span className={styles.opacity60}>
      We help product teams build role-specific skills in UX, PM, and AI to ship smarter, lead confidently, and drive real business impact.
    </span>
    <a href="/teams" className={styles.purpleLink}>Learn more →</a>
  </div>
</section>

{/* ANIMATION SECTION */}
<section className={styles.marqueeSection}>
  <div className={styles.marqueeContainer}>
    <div className={styles.marqueeInner}>
      {/* First set of logos */}
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6423178f81ce716edd7f851a_Micrisoft.svg" loading="lazy" width="169" height="80" alt="Microsoft" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/66301630500a1dd9056ad3be_Canva.svg" loading="lazy" width="169" height="80" alt="Canva" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6423176ff5659248257a1053_Deloitte.svg" loading="lazy" width="169" height="80" alt="Deloitte" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/66301659ea49592bc352ceaf_Dropbox.svg" loading="lazy" width="169" height="80" alt="Dropbox" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6630168a0d47e34ca6b6381c_tiktok.svg" loading="lazy" width="169" height="80" alt="TikTok" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016a6f2c1503f941c19a7_Paysafe.svg" loading="lazy" width="169" height="80" alt="Paysafe" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016bcd41fa1628a33e4bc_Ubisoft.svg" loading="lazy" width="169" height="80" alt="Ubisoft" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016cdbc3f2d38f6e11f46_IBM.svg" loading="lazy" width="169" height="80" alt="IBM" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016eef2c1503f941c5338_Forrester.svg" loading="lazy" width="102" height="48" alt="Forrester" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6589fcd9f3fc8359012852be_Samsung.svg" loading="lazy" width="169" height="80" alt="Samsung" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/66301727ea9ebc03c4d821e9_Red%20Bull.svg" loading="lazy" width="101" height="48" alt="Red Bull" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6709aeacf1dab4a7064543a0_Atlassian.svg" loading="lazy" width="101" height="48" alt="Atlassian" className={styles.runningLogosItem} />
      
      {/* Duplicate set for seamless looping */}
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6423178f81ce716edd7f851a_Micrisoft.svg" loading="lazy" width="169" height="80" alt="Microsoft" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/66301630500a1dd9056ad3be_Canva.svg" loading="lazy" width="169" height="80" alt="Canva" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6423176ff5659248257a1053_Deloitte.svg" loading="lazy" width="169" height="80" alt="Deloitte" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/66301659ea49592bc352ceaf_Dropbox.svg" loading="lazy" width="169" height="80" alt="Dropbox" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6630168a0d47e34ca6b6381c_tiktok.svg" loading="lazy" width="169" height="80" alt="TikTok" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016a6f2c1503f941c19a7_Paysafe.svg" loading="lazy" width="169" height="80" alt="Paysafe" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016bcd41fa1628a33e4bc_Ubisoft.svg" loading="lazy" width="169" height="80" alt="Ubisoft" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016cdbc3f2d38f6e11f46_IBM.svg" loading="lazy" width="169" height="80" alt="IBM" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/663016eef2c1503f941c5338_Forrester.svg" loading="lazy" width="102" height="48" alt="Forrester" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6589fcd9f3fc8359012852be_Samsung.svg" loading="lazy" width="169" height="80" alt="Samsung" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/66301727ea9ebc03c4d821e9_Red%20Bull.svg" loading="lazy" width="101" height="48" alt="Red Bull" className={styles.runningLogosItem} />
      <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6709aeacf1dab4a7064543a0_Atlassian.svg" loading="lazy" width="101" height="48" alt="Atlassian" className={styles.runningLogosItem} />
    </div>
  </div>
</section>

      {/* QUIZ SECTION */}
      {/* <section className={styles.quizSection}>
        <div className={styles.quizImageWrapper}>
          <img
            src={quizGif}
            alt="Quiz animation"
            className={styles.quizImage}
          />
        </div>
        <div className={styles.quizContent}>
          <h2 className={styles.quizTitle}>Discover Your Stack Personality</h2>
          <p className={styles.quizSubtitle}>
            Take a short quiz to find the best tech stack for your learning style and goals.
          </p>
          <a href="./quiz" className={styles.ctaButtonAlt}>
            Take the Quiz Now
          </a>
        </div>
      </section> */}

      {/* CAREER RESULTS SECTION */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsContainer}>
          <div className={styles.resultsLeft}>
            <h2 className={styles.resultsTitle}>
              Modern learning, built for today’s product professionals
            </h2>
          </div>
          <div className={styles.resultsRight}>
            <p className={styles.resultsSubtitle}>
             Whether you’re new or experienced, Uxcel helps you<br></br> build real-world skills, track your growth, and earn<br></br> industry-recognized certifications.
            </p>
          </div>
        </div>
      </section>

       {/* CARDS SECTION - ADDED RIGHT AFTER CAREER RESULTS */}
      <Cards />

    </> 
  );
}

// Fields for HubSpot module
export const fields = (
  <ModuleFields>
    <TextField name="headline" label="Main Headline" default="Build Your Tech Stack Smarter" />
    <TextField name="subHeadline" label="Subheadline" default="Customize, compare, and launch quickly" />
    
    <TextField name="ctaUrl" label="CTA URL" default="https://stackbuilder.dev" />
    <RichTextField name="features" label="Feature Highlights" />
  </ModuleFields>
);

export const meta = {
  label: 'StackBuilder Landing Page',
};
