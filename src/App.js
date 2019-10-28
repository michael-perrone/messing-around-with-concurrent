import React, { Suspense } from "react";
import "./App.css";
import { createResource } from "./Person";
import PersonComponent from "./PersonComponent";
import axios from "axios";

const resource = createResource();

const App = () => {
  console.log(resource);
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <PersonComponent resource={resource} />
      </Suspense>
    </div>
  );
};

export default App;
