import Particles from "react-tsparticles";
import React from 'react'
import { colors } from "../../constants/colors";

export const TsParticles = () => {
  const particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fpsLimit: 120,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: false,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 1,
              opacity: 1,
              size: 35,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 100,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: colors.backgroundOrange,
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
