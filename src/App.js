import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section className="container">
        <h3>Questions and Answers about Login</h3>
        <div className="info">
          {console.log(data)}
          {data.map((ele) => {
            return (
              <SingleQuestion key={ele.id} title={ele.title} info={ele.info} />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
