import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects"
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Achievements from "../components/Achievements"
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="text-white  ">
      <Hero />

      <Skills />
      <Experience/>
      <Projects/>
      <Education/>
      <Certificates/>
      <Achievements/>
      <Contact/>

      {/* <section id="skills" className="min-h-screen px-6 py-24">
        <h2 className="text-3xl font-semibold">Skills</h2>
      </section>

      <section id="experience" className="min-h-screen px-6 py-24">
        <h2 className="text-3xl font-semibold">Experience</h2>
      </section>

      <section id="projects" className="min-h-screen px-6 py-24">
        <h2 className="text-3xl font-semibold">Projects</h2>
      </section>

      <section id="education" className="min-h-screen px-6 py-24">
        <h2 className="text-3xl font-semibold">Education</h2>
      </section>

        <section id="certificates" className="min-h-screen px-6 py-24">
        <h2 className="text-3xl font-semibold">Certificates</h2>
      </section>

      <section id="achievements" className="min-h-screen px-6 py-24">
        <h2 className="text-3xl font-semibold">Achievements</h2>
      </section>

      <section id="contact" className="min-h-screen px-6 py-24">
        <h2 className="text-3xl font-semibold">Contact</h2>
      </section> */}

    
    </main>
  );
};

export default Home;
