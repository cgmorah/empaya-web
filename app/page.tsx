import { ClientInit } from "@/components/ClientInit";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Menu } from "@/components/Menu";
import { Historia } from "@/components/Historia";
import { VideoSection } from "@/components/VideoSection";
import { Encuesta } from "@/components/Encuesta";
import { Resenas } from "@/components/Resenas";
import { Encuentranos } from "@/components/Encuentranos";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ClientInit />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Menu />
        <Historia />
        <VideoSection />
        <Encuesta />
        <Resenas />
        <Encuentranos />
      </main>
      <Footer />
    </>
  );
}
