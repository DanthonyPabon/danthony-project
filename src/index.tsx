import { StateProvider } from "providers/state-provider";
import React from "react";
import AppStack from "routes/root";

import "utils/languages";

const App = () => {
  return (
    <StateProvider>
      <AppStack />
    </StateProvider>
  );
};
export default App;
