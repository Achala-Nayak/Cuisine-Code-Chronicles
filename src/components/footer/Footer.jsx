import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Cuisine & Code Chronicles" width={50} height={50} />
          <h1 className={styles.logoText}>Cuisine & Code Chronicles</h1>
        </div>
        <p className={styles.desc}>
        Welcome to Cuisine & Code Chronicles! Explore our blend of tech insights, delicious recipes, and travel stories. Join us as we discover and create together.</p>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/achalanayak/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width={18} height={18} />
          </a>
          <a href="https://github.com/Achala-Nayak" target="_blank" rel="noopener noreferrer">
            <Image src="/github.png" alt="GitHub" width={18} height={18} />
          </a>
          <a href="https://leetcode.com/u/achalanayak/" target="_blank" rel="noopener noreferrer">
            <Image src="/leetcode.png" alt="Leetcode" width={18} height={18} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Food</Link>
          <Link href="/">Tech</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="https://www.linkedin.com/in/achalanayak/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="https://github.com/Achala-Nayak" target="_blank" rel="noopener noreferrer">Github</Link>
          <Link href="https://leetcode.com/u/achalanayak/" target="_blank" rel="noopener noreferrer">Leetcode</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
