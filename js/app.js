particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 7,
        "density": {
          "enable": false
        }
      },
      "opacity": {
        "value": 1,
        "anim": {
          "enable": false
        }
      },
      "shape": {
        "type": "image",
        "image": {
                  "src": "images/maple_leaf.png",
                  "width": 50,
                  "height": 50
              }
      },
      "size": {
        "value": 25,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "straight": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
      },
      "modes": {
        "push": {
          "particles_nb": 12
        }
      }
    }
  });

particlesJS("particles-js2", {
    particles: {
        number: {
            value: 252,
            density: {
                enable: true,
                value_area: 631.3280775270874
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});