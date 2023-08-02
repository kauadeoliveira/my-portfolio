import React from "react";
import {
  Header,
  Hero,
  Projects,
  About,
  Skills,
  Contact,
  Footer,
} from "./components";

export default function App() {

  return (
    <>
    {/* <Header />  */}
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
    <Footer />
    </>
  );
}
