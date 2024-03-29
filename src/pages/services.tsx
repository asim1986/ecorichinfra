import Head from "next/head";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Ecorich Infratech</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Our Services" navTitle="Services" />

      <Services />
      <Stats />

      <Testimonials />

      <Footer />
    </>
  );
}
