import { ClientInit } from "@/components/ClientInit";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Packs } from "@/components/Packs";
import { Receta } from "@/components/Receta";
import { CtaBanner } from "@/components/CtaBanner";
import { Pedido } from "@/components/Pedido";
import { Opiniones } from "@/components/Opiniones";
import { Ubicacion } from "@/components/Ubicacion";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ClientInit />
      <Header />
      <main>
        <Hero />
        <Menu />
        <Packs />
        <Receta />
        <CtaBanner />
        <Pedido />
        <Opiniones />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
