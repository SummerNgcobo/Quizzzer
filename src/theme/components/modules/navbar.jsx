import React, { useState } from 'react';
import styles from '../../styles/navbar.module.css';
import {
  ModuleFields,
  TextField,
} from '@hubspot/cms-components/fields';

// Static version of the Navbar
export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      label: 'Product',
      submenu: ['Design Courses', 'Assessments', 'UX Tools', 'Pricing'],
    },
    {
      label: 'Events',
      submenu: ['Webinars', 'Workshops', 'UX Challenges'],
    },
    {
      label: 'Resources',
      submenu: ['Blog', 'Guides', 'Community'],
    },
  ];

   return (
    <nav className={styles.navbar}>
      {/* Left side - Uxcel logo */}
      <div className={styles.logo}>
        <img
          src="https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/632ac9aada179418cfc68fc3_logo%20(1).svg"
          alt="Uxcel logo"
          className={styles.partnerLogo}
        />
      </div>

      <ul className={styles.navLinks}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={styles.navItem}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span>{item.label}</span>
            <div
              className={`${styles.dropdown} ${
                activeDropdown === index ? styles.show : ''
              }`}
            >
              {item.submenu.map((subItem, subIndex) => (
                <a key={subIndex} href="#" className={styles.dropdownItem}>
                  {subItem}
                </a>
              ))}
            </div>
          </li>
        ))}
        <li className={styles.navItem}>
          <a href="/about">About</a>
        </li>
      </ul>

      <div className={styles.cta}>
        <a href="/login" className={styles.loginButton}>
          Log In
        </a>
        <a href="/quiz" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    </nav>
  );
};

// HubSpot CMS Module version
export function Component({ fieldValues }) {
  const navItems = fieldValues.navLinks || [];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>{fieldValues.logoText}</div>

      <ul className={styles.navLinks}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a href={item.url?.href || '#'}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <a href={fieldValues.loginUrl?.href || '/login'} className={styles.loginButton}>
          {fieldValues.loginText || 'Login'}
        </a>
        <a href={fieldValues.ctaUrl?.href} className={styles.ctaButton}>
          {fieldValues.ctaText}
        </a>
      </div>
    </nav>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="logoText"
      label="Logo Text"
      default="StackBuilder"
    />
    <TextField
      name="loginText"
      label="Login Button Text"
      default="Login"
    />
    <TextField
      name="loginUrl"
      label="Login Button URL"
      default="/login"
    />
    <TextField
      name="ctaText"
      label="CTA Button Text"
      default="Get Started"
    />
    <TextField
      name="ctaUrl"
      label="CTA Button URL"
      default="/signup"
    />
    {/* Add fields for navLinks if needed */}
  </ModuleFields>
);

export const meta = {
  label: 'Navbar Module',
};
