import { Hero } from "@/components/Hero";
import { CarouselSize } from "@/components/Carrossel";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ];
  return (
    <div>
      <header>
        <Hero />
      </header>
      <section className=" mt-24 flex flex-col gap-8">
        <h1 className="text-3xl text-center font-semibold dark:text-white">Encontre seu novo albúm favorito</h1>
        <CarouselSize />
      </section>
      <section className="mt-24">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
