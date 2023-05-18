import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FilteredPlayerTable } from "./components/FilteredPlayerTable";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Nguyễn Tuấn Anh
      </h1>
      <div className="content flex justify-center mt-5">
        <FilteredPlayerTable />
      </div>
    </>
  );
}

export default App;
