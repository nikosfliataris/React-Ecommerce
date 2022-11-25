import React from "react";
import "./AboutPage.scss";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <section className="about-page page section section-center">
        <img src={aboutImg} alt="Nice desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            id minima officia veniam, corporis doloremque iure perferendis
            dolore optio, et possimus! Iure doloremque mollitia repudiandae
            quaerat sint, necessitatibus voluptatibus pariatur quisquam, laborum
            sed quis porro aperiam deleniti similique culpa, laudantium in eos
            nesciunt ipsa nihil. Incidunt pariatur nam adipisci fuga.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
