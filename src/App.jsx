import React from "react";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import router from "./routes/router";

const App = () => {
  return (
    <div style={{ padding: "20px 100px" }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
