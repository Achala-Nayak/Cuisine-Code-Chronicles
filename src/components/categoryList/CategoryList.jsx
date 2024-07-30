import React from 'react';
import styles from './categoryList.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.tech}`}>
          <Image 
            src='/tech.png' 
            alt='' 
            width={32}
            height={32} 
            className={styles.image}
          />
          Tech
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
