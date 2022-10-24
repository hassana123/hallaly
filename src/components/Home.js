import React from "react";
import { text } from "react-svg-text";
import "./styles/home.css";
import blob from "./images/images1.jpeg";
import blob1 from "./images/images2.jpeg";
import blob2 from "./images/images3.jpeg";
import afro from "./images/afro1.jpg";
import afro1 from "./images/afro.jpg";

const Home = () => {
  return (
    <div className="body">
      <section>
        <div className="black-blob">
          <svg viewBox="0 0 500 500">
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            />
            <text width="500">
              <textPath xlinkHref="#curve">A World Full Of Creatives</textPath>
            </text>
          </svg>
        </div>
        <div className="image-blob">
          <img src={blob} alt="blob" />
        </div>
        <div className="girl-fro">
          <img src={afro} alt="afro" />
        </div>
      </section>
      <section className="sect2">
        <div className="bold">
          <h1>Absolutely Unique Art Expressions</h1>
        </div>
        <div className="text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="images">
          <img src={afro} alt="afro"></img>
          <img src={blob2} alt="blob"></img>
          <img src={blob1} alt="blob"></img>
          <img src={afro1} alt="afro"></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
