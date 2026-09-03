import styled from "styled-components";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        options={props.theme === "light" ? ConfigLight : ConfigDark}
        init={particlesInit}
      />
    </Box>
  );
};

export default ParticlesComponent;
