import Head from "next/head";

const Meta = () => {
    return(
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} />
        </Head>
    )
}