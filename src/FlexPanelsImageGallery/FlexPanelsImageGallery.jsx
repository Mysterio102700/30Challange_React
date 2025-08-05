import React, { useRef } from "react";
import Naruto from "../Assets/FlexPanelsImageGallery/naruto.jpg";
import Zoro from "../Assets/FlexPanelsImageGallery/roronoa-zoro-neon.png";
import Sukuna from "../Assets/FlexPanelsImageGallery/sukuna-electric.jpg";
import Jinwoo from "../Assets/FlexPanelsImageGallery/sung-jinwoo.jpg";
import Tanjiro from "../Assets/FlexPanelsImageGallery/tanjiro-kamado.png";
import Styles from "./FlexPanelsImageGallery.module.css";

const FlexPanelsImageGallery = () => {
  const heroes = [
    { start: "Wrong", center: "way", end: "again", img: Zoro },
    { start: "Ramen", center: "solves", end: "everything", img: Naruto },
    { start: "Sorrow", center: "sharpens", end: "resolve", img: Tanjiro },
    { start: "Level", center: "up", end: "again", img: Jinwoo },
    { start: "Blood", center: "demands", end: "worship", img: Sukuna },
  ];

  const panelRefs = useRef([]);

  const ToggleEvent = (index) => {
    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      if (i === index) {
        panel.classList.toggle(Styles.open);
        panel.classList.toggle(Styles["open-active"]);
      } else {
        panel.classList.remove(Styles.open);
        panel.classList.remove(Styles["open-active"]);
      }
    });
  };

  return (
    <div className="container flex max-w-full flex-1 h-screen overflow-hidden">
      {heroes.map((hero, index) => (
        <div
          key={index}
          onClick={() => ToggleEvent(index)}
          ref={(el) => (panelRefs.current[index] = el)}
          className={`${Styles.panel}  flex flex-col justify-center items-center transition-all duration-500`}
          style={{
            backgroundImage: `url(${hero.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p>{hero.start}</p>
          <p>{hero.center}</p>
          <p>{hero.end}</p>
        </div>
      ))}
    </div>
  );
};

export default FlexPanelsImageGallery;
