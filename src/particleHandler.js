import { tsParticles } from "tsparticles";

const handleParticles = () => {
  function addRainParticles() {
    tsParticles.load("tsparticles", {
      particles: {
        number: {
          value: 70,
          density: {
            value_area: 400,
          },
        },
        color: {
          value: "#fff",
        },
        stroke: {
          width: 1,
        },
        shape: {
          type: "polygon",
          polygon: {
            sides: 1,
            nb_sides: 1,
          },
        },
        rotate: {
          value: 90,
        },
        size: {
          value: 3,
        },
        move: {
          enable: true,
          direction: "bottom",
          straight: true,
          speed: 20,
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
    const mainDisplay = document.querySelector(".main-display");
    mainDisplay.appendChild(div);
    if (cond == "Rain" || cond == "Drizzle" || cond == "Thunderstorm") {
      addRainParticles();
    } else {
      addSnowParticles();
    }
  }

  function removeParticles() {
    const mainDisplay = document.querySelector(".main-display");
    const particle = document.querySelector("#tsparticles");
    if (particle) mainDisplay.removeChild(particle);
  }

  function evaluate(cond) {
    if (
      cond == "Rain" ||
      cond == "Snow" ||
      cond == "Drizzle" ||
      cond == "Thunderstorm"
    ) {
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
