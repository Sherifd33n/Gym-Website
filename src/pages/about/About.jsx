import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import "./about.css";
import StoryImage from "../../images/about1.jpg";
import visionImage from "../../images/about2.jpg";
import missionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        A town hall different from bala blu, blue blu bulaba. broom broom broom
        brooooooooom blue blu bulaba. broom broom broom.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              repellat aspernatur reprehenderit praesentium! Animi veniam, vel
              praesentium, corrupti amet autem tempora harum perspiciatis rerum
              blanditiis exercitationem vitae, quia molestias.
            </p>

            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              quidem, facere alias aperiam quasi qui at officia, nulla ducimus
              nesciunt eius quos nihil harum cumque.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              repellat aspernatur reprehenderit praesentium! Animi veniam, vel
              praesentium, corrupti amet autem tempora harum perspiciatis rerum
              blanditiis exercitationem vitae, quia molestias.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              quidem, facere alias aperiam quasi qui at officia, nulla ducimus
              nesciunt eius quos nihil harum cumque.
            </p>
          </div>

          <div className="about__section-image">
            <img src={visionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={missionImage} alt="Our Mission Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              repellat aspernatur reprehenderit praesentium! Animi veniam, vel
              praesentium, corrupti amet autem tempora harum perspiciatis rerum
              blanditiis exercitationem vitae, quia molestias.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              quidem, facere alias aperiam quasi qui at officia, nulla ducimus
              nesciunt eius quos nihil harum cumque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
