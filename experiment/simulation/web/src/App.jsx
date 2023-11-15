import "./App.css";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./redux/store";
function App() {
  return (
    <div style={{ width: "100%", height: "98vh" }}>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
