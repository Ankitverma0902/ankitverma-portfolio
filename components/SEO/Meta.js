import React from 'react'
import Head from 'next/head'

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Ankit Verma Portfolio - Cybersecurity & Full Stack Developer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta name="description"
                content="Ankit Verma's Personal Portfolio Website. Built with a Linux-inspired theme using Next.js and Tailwind CSS." />
            <meta name="author" content="Ankit Verma" />
            <meta name="keywords"
                content="Ankit Verma, Cybersecurity, Full Stack Developer, Ubuntu Portfolio, Next.js Portfolio, Tailwind Portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="" />

            {/* Schema.org for Google */}
            <meta itemProp="name" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta itemProp="description"
                content="Ankit Verma's personal portfolio built with Ubuntu-like styling using Next.js and Tailwind CSS." />
            <meta itemProp="image" content="" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta name="twitter:description"
                content="Ankit Verma's personal portfolio built with Ubuntu-like styling using Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="@ankitverma_09" />
            <meta name="twitter:creator" content="@ankitverma_09" />
            <meta name="twitter:image:src" content="" />

            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta property="og:title" content="Ankit Verma Portfolio - Cybersecurity & Full Stack Developer" />
            <meta property="og:description"
                content="Ankit Verma's personal portfolio built with Ubuntu-like styling using Next.js and Tailwind CSS." />
            <meta property="og:image" content="" />
            <meta property="og:url" content="https://ankitverma-portfolio.vercel.app/" />
            <meta property="og:site_name" content="Ankit Verma Personal Portfolio" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:type" content="website" />

            <link rel="icon" href="" />
            <link rel="apple-touch-icon" href="" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
    )
}
