import React from "react";
import Headers from '../components/header.jsx';
import Card from '../components/card.jsx';
import Technologies from '../components/Technologies.jsx';
import Work from '../components/Work.jsx';
import Contact from "../components/contact.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <div>
      <Headers />

      {/* Home / Hero */}
      <section id="home">

      </section>

      {/* About / Skills */}
      <section id="skills">
        <Card />
      </section>
      <Technologies />
      {/* Projects / Services */}
      <section id="projects">
        <Work />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
