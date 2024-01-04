// Swiper

var swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  speed: 1000,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 10,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
});

// tsParticles

tsParticles.load("tsparticles", {
  fpsLimit: 60,
  backgroundMode: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
      ],
    },
    destroy: {
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 5,
          random: {
            enable: true,
            minimumValue: 4,
          },
        },
        rate: {
          value: 10,
          random: {
            enable: true,
            minimumValue: 5,
          },
        },
        particles: {
          collisions: {
            enable: false,
          },
          destroy: {
            mode: "none",
          },
          life: {
            count: 1,
            duration: {
              value: 1,
            },
          },
        },
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: {
        enable: true,
        minimumValue: 4,
      },
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 0.1,
        sync: false,
      },
    },
    collisions: {
      enable: true,
      mode: "destroy",
    },
    move: {
      enable: true,
      speed: 7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  detectRetina: true,
});
