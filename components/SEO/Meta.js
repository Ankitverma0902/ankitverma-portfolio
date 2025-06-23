import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Ankit Verma Portfolio - Cybersecurity & Full Stack Developer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta name="description"
                content="Ankit Verma's personal portfolio website. Built with Ubuntu 20.04 theme using Next.js and Tailwind CSS. Showcasing cybersecurity projects, full stack work, and more." />
            <meta name="author" content="Ankit Verma" />
            <meta name="keywords"
                content="Ankit Verma, Ankit Cybersecurity Portfolio, Ubuntu Portfolio, Full Stack Developer, Ethical Hacker, React Developer, InfoSec Portfolio, Linux Theme Portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="/images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta itemProp="description"
                content="Ankit Verma's personal portfolio website. Built using Next.js and Tailwind CSS with an Ubuntu-like experience." />
            <meta itemProp="image" content="/images/logos/fevicon.png" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta name="twitter:description"
                content="Ankit Verma's personal portfolio website. Explore his work in cybersecurity, web development, and React." />
            <meta name="twitter:site" content="@AnkitVerma" />
            <meta name="twitter:creator" content="@AnkitVerma" />
            <meta name="twitter:image:src" content="/images/logos/logo_1024.png" />

            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta property="og:title" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta property="og:description"
                content="Ankit Verma's personal portfolio website. Built using Next.js and Tailwind CSS with an Ubuntu-like experience." />
            <meta property="og:image" content="/images/logos/logo_1200.png" />
            <meta property="og:url" content="https://ankitverma-portfolio.vercel.app/" />
            <meta property="og:site_name" content="Ankit Verma Personal Portfolio" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:type" content="website" />

            {/* Favicon & Fonts */}
            <link rel="icon" href="/images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="/images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
    )
}
