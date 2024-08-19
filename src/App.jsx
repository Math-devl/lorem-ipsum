import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainDiv">
        <Content name="Lorem" text="blablabla" />
      </div>
    </>
  );
}

export default App;
