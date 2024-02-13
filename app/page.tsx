import Image from "next/image";
import { HeroSection } from "./components/section/herosection";
import { WhySection } from "./components/section/why";
import { Articles } from "./components/section/articles";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <Articles />
    </>
  );
}
