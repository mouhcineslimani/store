import React, { useEffect, useState } from "react";
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
import "./Hero.css";

const images = [pic1, pic2, pic3];

function Hero() {
  const [index, setIndex] = useState(0);
  const [pic, setPic] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(
    () => {
      // Update the displayed image when the index changes
      setPic(images[index]);
    },
    [index]
  );

  return (
    <div className="hero flex">
      <img src={pic} alt="" />
      <div className="navigation flex">
        <span />
        <span />
      </div>
    </div>
  );
}

export default Hero;
