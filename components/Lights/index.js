import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ allLights, handleOnToggle }) {
  return (
    <StyledLights>
      {allLights.map((light) => {
        return (
          <li key={light.id}>
            <Light
              name={light.name}
              onToggle={() => handleOnToggle(light.id)}
              isOn={light.isOn}
            />
          </li>
        );
      })}
    </StyledLights>
  );
}
