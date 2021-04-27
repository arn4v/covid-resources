import * as React from "react"
// import "../styles/index.css"
// import "inter-ui/inter.css"
// import "react-static-tweets/styles.css"
import NextClarity from "~/components/NextClarity"
import NextGA from "~/components/NextGA"
import { DefaultSeo } from "next-seo"
import { defaultSeoProps, isProduction } from "~/constants"

function App({ Component, pageProps }) {
  React.useEffect(() => {
    window.location.href = "https://covid.army"
  }, [])

  return null
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextClarity id={process.env.NEXT_PUBLIC_CLARITY_ID} />
      <NextGA
        disabled={!isProduction}
        trackingId={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      >
        <Component {...pageProps} />
      </NextGA>
    </>
  )
}

export default App
