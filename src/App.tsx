import { Contact, Experience, Home, NavBar, Skills } from "./components";

export function App() {
  return (
    <div>
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
      <section id="contacts">
        <Contact />
      </section>
    </div>
  );
}
