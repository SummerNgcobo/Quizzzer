import React from 'react';
import styles from '../../styles/build.module.css';
import {
  ModuleFields,
  TextField,
  RichTextField
} from '@hubspot/cms-components/fields';

export function BuildComponent({ 
  headline = 'Build real-world product skills, faster',
  description = "<p>Whether you're new or experienced, Uxcel helps you build real-world skills, track your growth, and earn industry-recognized certifications.</p>",
  sectionId = 'build-section'
}) {
  React.useEffect(() => {
    const tabLinks = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.getAttribute('data-tab');

        tabLinks.forEach(l => l.classList.remove(styles.isActive));
        tabContents.forEach(c => c.classList.remove(styles.isActive));

        link.classList.add(styles.isActive);
        document.querySelector(`[data-tab-content="${tabId}"]`)?.classList.add(styles.isActive);
      });
    });
  }, []);

  return (
    <section className={styles.resultsSection} id={sectionId}>
      <div className={styles.resultsContainer}>
        {/* Left Column */}
        <div className={styles.resultsLeft}>
          <h2 className={styles.resultsTitle} style={{ display: 'block', visibility: 'visible' }}>
            {headline}
          </h2>

          <div className={styles.learningCard}>
            <div className={styles.cardHeader}>
              <svg className={styles.icon} width="24" height="22" viewBox="0 0 24 22" fill="currentColor">
                <path d="M5 11.8828L10.7816 14.4781C11.5573 14.8263 12.4427 14.8263 13.2184 14.4781L19 11.8828V18.4649C19 19.8595 15.866 22 12 22C8.13401 22 5 19.8595 5 18.4649V11.8828Z" />
                <path d="M13.2184 3.26116C12.4427 2.91295 11.5573 2.91295 10.7816 3.26116L2.59386 6.93664C2.23273 7.09875 2 7.46046 2 7.85961C2 8.25876 2.23273 8.62047 2.59386 8.78259L10.7816 12.4581C11.5573 12.8063 12.4427 12.8063 13.2184 12.4581L21.4061 8.78259C21.7673 8.62047 22 8.25876 22 7.85961C22 7.46046 21.7673 7.09875 21.4061 6.93664L13.2184 3.26116Z" />
              </svg>
              <span>    Interactive learning for every role & level</span>
            </div>
            <div className={styles.cardContent}>
              <p>Bite-sized, interactive courses built for busy professionals. Advance your design or product management career in just 5 minutes a day.</p>
              <a href="/learn-ux-design" className={styles.learnMoreLink}>Learn more →</a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.resultsRight}>
          
          <div className={styles.coursesGrid}>
            {/* Course 1 */}
            <a href="https://app.uxcel.com/courses/ai-fundamentals-for-ux" className={styles.courseCard}>
              <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/688a1c5fc0201a56653d0108_cover.svg" alt="AI Fundamentals" />
              <div>
                <h3>AI Fundamentals for Designers</h3>
                <p>Intermediate · 3 hours</p>
              </div>
            </a>

            {/* Course 2 */}
            <a href="https://app.uxcel.com/courses/design-foundations" className={styles.courseCard}>
              <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/688a1ea14e7a0bf975f3fd0c_cover%20(3).svg" alt="UX Foundations" />
              <div>
                <h3>UX Design Foundations</h3>
                <p>Beginner · 4 hours</p>
              </div>
            </a>

            {/* Course 3 */}
            <a href="https://app.uxcel.com/courses/figma-intro" className={styles.courseCard}>
              <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/688a1ed374c28519fb03fedc_cover%20(4).svg" alt="Figma Intro" />
              <div>
                <h3>Introduction to Figma</h3>
                <p>Beginner · 5 hours</p>
              </div>
            </a>

            {/* Course 4 */}
            <a href="https://app.uxcel.com/courses/intro-product-management" className={styles.courseCard}>
              <img src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/688a29e56440ce085593efa7_cover%20(6).svg" alt="Product Management" />
              <div>
                <h3>Introduction to Product Management</h3>
                <p>Beginner · 3 hours</p>
              </div>
            </a>

           
           
          </div>
        </div>
      </div>
    </section>
  );
}

// HubSpot Wrapper
export function Component({ fieldValues }) {
  return (
    <BuildComponent 
      headline={fieldValues?.headline}
      description={fieldValues?.description}
      sectionId={fieldValues?.sectionId}
    />
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="headline"
      label="Main Headline"
      default="Build real-world product skills, faster"
    />
    <RichTextField
      name="description"
      label="Description Content"
      default="<p>Whether you're new or experienced, Uxcel helps you build real-world skills, track your growth, and earn industry-recognized certifications.</p>"
    />
    <TextField
      name="sectionId"
      label="Section ID"
      default="build-section"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Two Column Content with Courses',
  icon: 'layout-columns',
  category: 'content'
};