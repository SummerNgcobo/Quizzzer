import React from 'react';
import styles from "../../styles/footer.module.css";
import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
  UrlField,
  RepeatedFieldGroup,
  BooleanField,
} from "@hubspot/cms-components/fields";

// ✅ Footer component
export const Component = ({ 
  ctaHeading, 
  ctaButtonText, 
  ctaButtonUrl,
  companyName,
  showAppButtons,
  appStoreUrl,
  googlePlayUrl,
  socialLinks,
  footerColumns,
  copyrightText,
  bottomLinks
}) => {
  // Organized links by category as shown in the screenshot
  const linkCategories = [
    {
      title: "Products",
      links: [
        "Courses",
        "Career paths", 
        "Skill assessments",
        "Project briefs",
        "Professional certifications",
        "UX learning experience",
        "PM learning experience",
        "Uxcel Pulse",
        "CAREER QUIZ"
      ]
    },
    {
      title: "For Business",
      links: [
        "Uxcel for Teams",
        "Business pricing",
        "Customer stories",
        "Book a demo",
        "Learn",
        "Team certification"
      ]
    },
    {
      title: "Community",
      links: [
        "Upcoming events",
        "Past webinars & events",
        "Learner stories",
        "Uxcel rankings",
        "Certified professionals",
        "Discord community",
        "Impact report",
        "Wall of love"
      ]
    },
    {
      title: "Popular Courses",
      links: [
        "UX design courses",
        "Product management courses",
        "AI courses",
        "UX Design Foundations",
        "Accessibility foundations",
        "Product discovery"
      ]
    },
    {
      title: "Resources",
      links: [
        "Why Uxcel?",
        "Blog",
        "Instructors program",
        "Mentors program",
        "Affiliate program",
        "Universities & non-profits program"
      ]
    },
    {
      title: "More",
      links: [
        "State of AI in product teams REPORT",
        "Gift membership",
        "Partnerships",
        "Design maturity assessment",
        "Compare Uxcel"
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* CTA Section */}
        <div className={styles.footerCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaHeading}>
              {ctaHeading || "Invest in your product career with Uxcel today"}
            </h3>
          </div>
          <div className={styles.ctaBtnWrapper}>
            <a href={ctaButtonUrl || "#"} className={styles.ctaBtn}>
              {ctaButtonText || "Get started"}
            </a>
          </div>
        </div>

        <div className={styles.sectionDivider}></div>

        {/* Main Footer Content */}
        <div className={styles.footerTop}>
          {/* Left Column */}
          <div className={styles.footerColFirst}>
            <div className={styles.footerColInnerTop}>
              <a href="/" className={styles.footerLogo}>
                <span className={styles.logoIcon}>🏢</span>
                <span className={styles.logoText}>{companyName || "UXCEL"}</span>
              </a>
              <ul className={styles.footerLinksList}>
                <li className={styles.footerMenuItem}>
                  <a href="/about" className={styles.footerLink}>About Us</a>
                </li>
                <li className={styles.footerMenuItem}>
                  <a href="/news" className={styles.footerLink}>News & Updates</a>
                </li>
                <li className={styles.footerMenuItem}>
                  <a href="/help" className={styles.footerLink}>Help Center</a>
                </li>
              </ul>
            </div>
            
            <div className={styles.footerColInnerBottom}>
              <ul className={styles.footerSocialList}>
                {socialLinks?.map((social, index) => (
                  <li key={index}>
                    <a 
                      href={social.url || "#"} 
                      aria-label={social.platform || "Social Media"} 
                      className={styles.footerSocialLink}
                    >
                      {social.platform === 'LinkedIn' && <span className={styles.socialIcon}>💼</span>}
                      {social.platform === 'Instagram' && <span className={styles.socialIcon}>📷</span>}
                      {social.platform === 'YouTube' && <span className={styles.socialIcon}>🎥</span>}
                      {social.platform === 'Twitter' && <span className={styles.socialIcon}>🐦</span>}
                      {social.platform === 'Discord' && <span className={styles.socialIcon}>💬</span>}
                    </a>
                  </li>
                ))}
              </ul>

              {showAppButtons && (
                <div className={styles.footerAppBtns}>
                  <a href={appStoreUrl || "#"} className={styles.appButton}>
                    <img 
                      src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/64e631dd27f783843fc69fac_appstore.svg" 
                      alt="AppStore" 
                      width="162" 
                      height="52"
                    />
                  </a>
                  <a href={googlePlayUrl || "#"} className={styles.appButton}>
                    <img 
                      src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/64e632ae608f42e274e27b44_googleplay.svg" 
                      alt="Google Play" 
                      width="162" 
                      height="52"
                    />
                  </a>
                </div>
              )}

              <div className={styles.footerBadgeWrapper}>
                <div className={styles.badge}>
                  <span className={styles.badgeText}>Top Rated</span>
                  <span className={styles.badgeYear}>2025</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeText}>Premium</span>
                  <span className={styles.badgeYear}>Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Link Categories */}
          <div className={styles.rhsLinks}>
            {linkCategories.map((category, index) => (
              <div key={index} className={styles.linksColumn}>
                <h4 className={styles.linksHeader}>{category.title}</h4>
                <ul className={styles.linksList}>
                  {category.links.map((link, idx) => (
                    <li key={idx} className={styles.linkItem}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sectionDivider}></div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <ul className={styles.footerBottomLinks}>
            {bottomLinks?.map((link, index) => (
              <li key={index}>
                <a href={link.url || "#"}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.copyright}>
            {copyrightText || `© 2025 ${companyName || "Uxcel"} Management Ltd. All rights reserved.`}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ✅ HubSpot module fields
export const fields = (
  <ModuleFields>
    <TextField name="ctaHeading" label="CTA Heading" default="Invest in your product career with Uxcel today" />
    <TextField name="ctaButtonText" label="CTA Button Text" default="Get started" />
    <UrlField name="ctaButtonUrl" label="CTA Button URL" default={{ href: "/get-started" }} />
    <TextField name="companyName" label="Company Name" default="Uxcel" />
    <BooleanField name="showAppButtons" label="Show App Store Buttons" default={true} />
    <UrlField name="appStoreUrl" label="App Store URL" default={{ href: "/app-store" }} />
    <UrlField name="googlePlayUrl" label="Google Play URL" default={{ href: "/google-play" }} />
    <RepeatedFieldGroup name="socialLinks" label="Social Media Links" default={[
      { platform: "LinkedIn", url: { href: "/linkedin" } },
      { platform: "Instagram", url: { href: "/instagram" } },
      { platform: "YouTube", url: { href: "/youtube" } },
      { platform: "Twitter", url: { href: "/twitter" } },
      { platform: "Discord", url: { href: "/discord" } }
    ]}>
      <TextField name="platform" label="Platform" />
      <UrlField name="url" label="URL" />
    </RepeatedFieldGroup>
    <RepeatedFieldGroup name="footerColumns" label="Footer Columns" default={[]}>
      <TextField name="title" label="Column Title" />
      <RepeatedFieldGroup name="links" label="Links">
        <TextField name="text" label="Link Text" />
        <UrlField name="url" label="Link URL" />
        <TextField name="badge" label="Badge Text (optional)" />
        <TextField name="badgeColor" label="Badge Color (blue/default)" />
      </RepeatedFieldGroup>
    </RepeatedFieldGroup>
    <RepeatedFieldGroup name="bottomLinks" label="Bottom Links" default={[]}>
      <TextField name="text" label="Link Text" />
      <UrlField name="url" label="Link URL" />
    </RepeatedFieldGroup>
    <TextField name="copyrightText" label="Copyright Text" default="© 2025 UXCEL Management Ltd. All rights reserved." />
  </ModuleFields>
);

// ✅ HubSpot module meta
export const meta = {
  label: "Uxcel-style Footer",
  icon: "layout",
  category: "theme",
};