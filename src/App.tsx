import { Contact, Experience, Home, NavBar, Skills } from "./components";

export function App() {
  return (
    <div className="test">
      <NavBar />

      <section id="home">
        <Home />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
