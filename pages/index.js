import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanity Ecommerce</title>
        <meta name="description" content="Full stack e-commerce with Next and Sanity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Sanity E-Commerce
      </Typography>
    </div>
  );
}
