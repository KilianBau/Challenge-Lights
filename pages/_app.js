import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const allLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(allLights);

  //toggle lights

  function handleOnToggle(lightId) {
    const updatedLights = isOn.map((light) => {
      if (light.id === lightId) {
        const updatedLight = {
          ...light,
          isOn: !light.isOn,
        };
        return updatedLight;
      } else {
        return light;
      }
    });
    setIsOn(updatedLights);
  }

  // all lights on

  function handleAllLightsOn() {
    const updatedLights = isOn.map((light) => {
      const updatedLight = {
        ...light,
        isOn: true,
      };
      return updatedLight;
    });
    setIsOn(updatedLights);
  }
  console.log(isOn);

  // all lights off

  function handleAllLightsOff() {
    const updatedLights = isOn.map((light) => {
      const updatedLight = {
        ...light,
        isOn: false,
      };
      return updatedLight;
    });
    setIsOn(updatedLights);
  }

  // Sum

  const count = isOn.map((light) => {
    if (light.isOn === true) {
      return light;
    } else {
      return null;
    }
  });

  const realCount = count.filter((count) => {
    if (count === null) {
      return null;
    } else {
      return count;
    }
  });

  const sum = realCount.length;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        allLights={isOn}
        handleOnToggle={handleOnToggle}
        sum={sum}
        handleAllLightsOn={handleAllLightsOn}
        handleAllLightsOff={handleAllLightsOff}
      />
    </Layout>
  );
}
