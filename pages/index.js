import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Miss Buffalo</title>
        <meta name="description" content="Miss Buffalo Scholarship Organization " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
      <img src="/images/logo.png" alt="Miss Buffalo logo" className={styles.logo} />
        <nav>
  
        <ul className={`${styles.navlist} ${isOpen ? styles.open : ''}`}>
            <li className={styles.navitem}><Link href="#history">History</Link></li>
            <li className={styles.navitem}><Link href="#mission">Mission</Link></li>
            <li className={styles.navitem}><Link href="#vision">Vision</Link></li>
            <li className={styles.navitem}><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
  <section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>The 2023 Miss Buffalo Scholarship Competition</h1>
    <h2 className={styles.heroSubtitle}>Saturday, October 28 · 6 - 9pm EDT</h2>
    <h2 className={styles.heroSubtitle}>Bennett High School, 2885 Main Street, Buffalo, NY 14214</h2>
    <a href="https://www.eventbrite.com/e/miss-buffalo-scholarship-competition-tickets-703555693017?aff=oddtdtcreator&fbclid=IwAR0HH2yC0TOGtTRI58bO_wT8P46UhgbKJLjPrR1JKOBb2nD9yTZzhfQsH50_aem_AZJGYZinbyvJsjT4PR0nb8adXwYyq6cJ5t94yIyyidMps_eUfnkvXpFxNEHnrWS-Kew&mibextid=Zxz2cZ" className={styles.heroButton}>Purchase Tickets</a>
  </div>
  </section>
  </main>

      <main className={styles.main}>

      <section id="history" className={`${styles.section} ${styles.grid}`}>
  <div className={styles.image}>
    <img src="/images/history.jpg" alt="History Image" />
  </div>
  <div>
  <h1>Our History</h1>
          <p>
    Miss Buffalo, Miss Niagara and Outstanding Teens will not only serve as a role model for young women and as an ambassador for the Miss America Organization, she will also urge young women to develop their leadership skills and to take an active role in their communities.
  </p>
  <p>
    The Miss Buffalo Scholarship Organization provides opportunities for young women to achieve their personal and professional ambitions. Candidates also participate in community service activities and develop leadership skills that help them excel in their chosen career and life goals.
  </p>
  <p>
    The Miss Buffalo Scholarship Organization is a 501(c) 3 tax-exempt nonprofit entity. Received donations are tax deductible to the extent provided by law and as per the advice of your accountant. The Miss Buffalo Scholarship Organization has made tens of thousands of dollars available in scholarships and in-kind funds to young women locally.
  </p>
  <p>
    The Miss America Organization (MAO) is a 501(c) 4 nonprofit organization that controls and oversees the local, state, and national competition framework, and hosts the annual Miss America Competition and telecast. Miss America candidates working towards college or postgraduate degrees can earn scholarship awards to help further their education. MAO is comprised of 51 licensed organizations- including all 50 states and the District of Columbia.
  </p>
  <p>
    The Miss America Foundation (MAF) is a separate 501(c) 3 nonprofit organization that serves as the scholarship arm that processes scholarships for recipients across the country. MAF proudly offers academic and community-based scholarships for undergraduate and graduate studies, as well as endowed scholarships for those young women attending medical school, working in special areas for military service awareness and in the performing arts.
  </p>
  </div>
</section>

<section id="mission" className={`${styles.section} ${styles.grid}`}>
  <div>
  <h1>Our Mission</h1>
          <p>
    Our mission is to empower young women to strive for excellence when pursuing personal and professional goals while becoming instruments of change within their communities.
  </p>
  <p>
    The Miss Buffalo Program has produced women who have gone on to become Engineers, Music industry entertainers, Business professionals, Full-time moms, Professional cheerleaders, Marketing executives, Clerks for the Georgia Supreme court, Actresses, MBA recipients, and Entrepreneurs.
  </p>
  </div>
  <div className={styles.image}>
    <img src="/images/mission.jpg" alt="Mission Image" />
  </div>
</section>

<section id="vision" className={`${styles.section} ${styles.grid}`}>
  <div className={styles.image}>
    <img src="/images/vision.jpg" alt="Vision Image" />
  </div>
  <div>
  <h1>Our Vision</h1>
          <p>
    Through our work with the Miss America Opportunity, we want to increase opportunities for young women to further their educational and professional pursuits. The Miss Buffalo Competition is a licensee of the Miss America Opportunity and is designed to provide scholarship opportunities to young women throughout the WNY area.
  </p>
  </div>
</section>



        <section id="contact" className={styles.section}>
          <h1>Contact</h1>
          <p>Mailing Address: Miss Buffalo Scholarship Org, PO Box 8, Buffalo, NY 14207</p>
          <p>Email: <a href="mailto:taisha@missbuffaloscholarship.org">taisha@missbuffaloscholarship.org</a></p>
          <a href="https://forms.gle/1ncX3to2WE8MdxZXA" target="_blank" rel="noopener noreferrer">Registration Form</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.missbuffalo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'Miss Buffalo'}
        </a>
      </footer>
    </div>
  )
}
