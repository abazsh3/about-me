import Head from 'next/head';
import Image from 'next/image';

import clsx from 'clsx';
import styles from '@/styles/Home.module.css';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useState } from 'react';
export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768 ? true : false;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon-32x32.png" />
        <title>Abolfazl Shamsollahi</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
      </Head>

      <Flippy
        className={styles.card}
        flipOnHover={!isMobile}
        onClick={() => {
          if (!isMobile) {
            return;
          }
          setTimeout(() => setFlipped(!flipped), 100);
        }}
        onMouseEnter={() => {
          if (isMobile) {
            return;
          }
          setTimeout(() => setFlipped(true), 100);
        }}
        onMouseLeave={() => {
          if (isMobile) {
            return;
          }
          setTimeout(() => setFlipped(false), 100);
        }}
      >
        <FrontSide className={styles.frontCard}>
          {!flipped && (
            <div className={styles.profilePicture}>
              <Image
                src="/images/image-victor.jpg"
                alt="avatar"
                style={{ borderRadius: `100%` }}
                width={`110px`}
                height={`110px`}
              />
            </div>
          )}
          <div className={styles.detailsSection}>
            <div className={styles.nameSection}>
              <h3 style={{ marginBottom: `1rem` }}>
                Abolfazl Shamsollahi
                <span style={{ marginLeft: `1rem` }}>25 </span>
              </h3>
              <span style={{ fontWeight: 400, color: `#969696` }}>Tehran</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.followerSection}>
              <h3>JavaScript</h3>
              <h3>TypeScript</h3>
              <h3>ReactJS</h3>
              <h3>NextJs</h3>
              <h3>ExpressJs</h3>
              <h3>Rest&Graphql</h3>
            </div>
          </div>
        </FrontSide>
        <BackSide className={clsx(styles.backCard)}>
          <p style={{ marginTop: `2rem` }}>
            Inventive Front-End Developer with 2+ years of broad expertise in
            JavaScript ES6/ES2017 & React areas with willingness to learn and
            master Back-end Development.
          </p>

          <div
            style={{
              display: `grid`,
              flexDirection: `column`,
              margin: `2rem 2rem`,
              rowGap: `1rem`,
              textAlign: `left`,
            }}
          >
            <>
              <a href={`https://alerto.ir`} target={`_blank`}>
                Alerto
              </a>
              <p>
                Crypto Currency SMS price alert web app
                (TypeScript,NextJs,ExpressJs,MySql)
              </p>
            </>
            <>
              <a href={`https://t.me/bitbolbot`} target={`_blank`}>
                BitbolBot
              </a>
              <p>
                Telegram robot that uses binance api to monitor Crypto Prices
                (JavaScript,TelegrafJs)
              </p>
            </>
            <>
              <a
                href={`https://myket.ir/developer/dev-56474/apps?lang=fa`}
                target={`_blank`}
              >
                Android Apps
              </a>
              <p>Android Apps written in Java (not anymore maintained)</p>
            </>
          </div>
        </BackSide>
      </Flippy>
      <a
        style={{ fontSize: '1.4rem' }}
        className={styles.downloadButton}
        href="/MyResume.pdf"
        download
      >
        Download My Resume
      </a>
    </div>
  );
}
