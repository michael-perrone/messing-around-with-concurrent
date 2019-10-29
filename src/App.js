import React, { Suspense, useState } from "react";
import "./App.css";
import Nummy from "./Nummy";
import { createResource } from "./Person";
import PersonComponent from "./PersonComponent";
import axios from "axios";

const initialResource = createResource();

const App = () => {
  const [resource, setResource] = useState(initialResource);

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Nummy resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>whtyn o load</h1>}>
        <PersonComponent resource={resource} />
      </Suspense>
      <button onClick={() => setResource(createResource())}>
        refresh data
      </button>
    </div>
  );
};

export default App;
