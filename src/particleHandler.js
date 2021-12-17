import { tsParticles } from "tsparticles";
import RainDrop from "./assets/raindrop.svg";

const handleParticles = () => {
  function addRainParticles() {
    tsParticles
      .load("tsparticles", {
        fpsLimit: 60,
        particles: {
          number: {
            value: 30,
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
              height: 10,
            },
          },
          size: {
            value: 1,
          },
          move: {
            enable: true,
            direction: "bottom",
            straight: true,
            speed: 6,
          },
        },
      })
      .then((data) => {
        console.log(data);
      });
  }
  function addSnowParticles() {
    tsParticles
      .load("tsparticles", {
        fpsLimit: 60,
        particles: {
          number: {
            value: 20,
            density: {
              value_area: 400,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            direction: "bottom",
            straight: true,
            speed: 6,
          },
        },
      })
      .then((data) => {
        console.log(data);
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
      removeParticles();
    }
  }
  return {
    evaluate,
  };
};

export default handleParticles();
