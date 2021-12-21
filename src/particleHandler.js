import { tsParticles } from "tsparticles";
import RainDrop from "./assets/raindrop.svg";

const handleParticles = () => {
  function addRainParticles() {
    tsParticles.load("tsparticles", {
      particles: {
        number: {
          value: 50,
          density: {
            value_area: 400,
          },
        },
        color: {
          value: "#000000",
        },
        shape: {
          type: "image",
          image: {
            src: RainDrop,
            width: 1,
            height: 7,
          },
        },
        size: {
          value: 1,
        },
        move: {
          enable: true,
          direction: "bottom",
          straight: true,
          speed: 7,
        },
      },
    });
  }
  function addSnowParticles() {
    tsParticles.load("tsparticles", {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        size: {
          value: 6,
          random: true,
        },
        opacity: {
          value: 5,
          random: true,
        },
        move: {
          enable: true,
          direction: "bottom",
        },
        shape: {
          value: "circle",
        },
      },
    });
  }

  function addParticles(cond) {
    const div = document.createElement("div");
    div.id = "tsparticles";
    document.body.appendChild(div);
    if (cond == "Rain") {
      addRainParticles();
    } else {
      addSnowParticles();
    }
  }

  function removeParticles() {
    const particle = document.querySelector("#tsparticles");
    if (particle) document.body.removeChild(particle);
  }

  function evaluate(cond) {
    if (cond == "Rain" || cond == "Snow") {
      addParticles(cond);
    } else {
      console.log("Hi");
      removeParticles();
    }
  }
  return {
    evaluate,
  };
};

export default handleParticles();
