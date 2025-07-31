import { useEffect, useState } from "react";
import Styles from "./Clock.module.css";

const Clock = () => {
  const [Time, setTime] = useState(new Date());
  const seconds = Time.getSeconds();
  const minutes = Time.getMinutes();
  const hours = Time.getHours();
  const [size, setSize] = useState(window.innerWidth * 0.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      let newSize = window.innerWidth * 0.3;

      if (window.innerWidth < 600) {
        newSize = Math.max(300, newSize);
      }

      if (window.innerWidth >= 600 && window.innerWidth <= 1024) {
        newSize = Math.max(400, newSize);
      }

      if (window.innerWidth > 1200) {
        newSize = Math.min(600, newSize);
      }

      setSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    console.log(window.addEventListener("resize", handleResize));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const secondsAngle = (seconds / 60) * 360 + 90;
  const minutesAngle = (minutes / 60) * 360 + 90;
  const hoursAngle = ((hours % 12) + minutes / 60) * 30 + 90;

  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className={Styles.container}>
      <div
        className={Styles.clockFace}
        style={{ width: size, height: size, position: "relative" }}
      >
        {numbers.map((number, index) => {
          const angle = (index + 1) * 30  ;
          return (
            <div
              key={number}
              className={Styles.number}
              style={{
                transform: `rotate(${angle}deg) translateY(-${size / 2.2}px)`
              }}
            >
              {number}
            </div>
          );
        })}

        <div
          className={`${Styles.hands}`}
          style={{
            transform: `rotate(${secondsAngle}deg)`,
            width: "45%",
            left: "5%",
          }}
        ></div>
        <div
          className={`${Styles.hands}`}
          style={{
            transform: `rotate(${minutesAngle}deg)`,
            width: "40%",
            left: "10%",
          }}
        ></div>
        <div
          className={`${Styles.hands}`}
          style={{
            transform: `rotate(${hoursAngle}deg)`,
            width: "25%",
            left: "25%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Clock;
