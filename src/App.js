import React, { useState, useEffect } from "react";
import axios from "axios";
import DebugForm from "./component/DebugForm/DebugForm";
import "./App.css";

function App() {
  const [useResponseData, setResponseData] = useState("");
  const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
  const url = "http://139.162.69.133:3000/api/getBugList"; // origin api url
  useEffect(() => {
    axios
      .get(`${cors}${url}`)
      .then(function (response) {
        setResponseData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let load = useResponseData
    ? useResponseData.map((e) => {
        return <DebugForm data={e} key={Math.random()} />;
      })
    : null;
  return (
    <div className="App">
      <h1>DebugForm</h1>
      {load}
    </div>
  );
}

export default App;
