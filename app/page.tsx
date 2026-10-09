import { Area, Booking, FAQ, Footer, Header, Hero, MobileBar, Owner, Packages, Process, Proof, Reviews } from "@/components/Site";
import { ConceptTag } from "@/components/ConceptTag";

/*
 * Page order follows the build prompt's page plan:
 * first screen → proof → packages → how it works → reviews → area and hours → owner → booking → FAQ.
 * No LocalBusiness structured data on a concept build (nothing here is a confirmed fact).
 */
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#packages">Skip to packages</a>
      <Header />
      <main>
        <Hero />
        <Proof />
        <Packages />
        <Process />
        <Reviews />
        <Area />
        <Owner />
        <Booking />
        <FAQ />
      </main>
      <Footer />
      <MobileBar />
      <ConceptTag />
    </>
  );
}
