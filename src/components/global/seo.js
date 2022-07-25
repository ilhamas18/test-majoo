import React from "react"
import Head from "next/head"

function SEO({
  description = "",
  title = "Majoo Front End Test",
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="robots" content="index,follow" />

        <title>{title}</title>
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#B89124" />
      </Head>
    </>
  )
}

export default SEO
