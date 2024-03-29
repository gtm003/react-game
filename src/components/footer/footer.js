import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  const links = [
    {
      logo: 'gtm003',
      img: '../../assets/rs.logo.svg',
      href: 'https://github.com/gtm003',
    },
    {
      logo: 'RSSchool',
      img: '',
      href: 'https://docs.rs.school/#/',
    },
  ];
  return (
    <div className={styles.footer}>
      {links.map((link, index) => {
          return (
            <a href={link.href} key={index} className={styles[link.logo]}>
            </a>
          );
        })}
    </div>
  )
}


