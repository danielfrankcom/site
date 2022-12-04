import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import Landing from "./Landing";

class App extends React.Component {
  render() {
    return (
      <NextUIProvider>
        <Landing />
      </NextUIProvider>
    );
  }
}

export default App;
