import { useState } from "react";
import Components2 from "../components2";

export default function Components1() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>Your components 1</h1>
      <button
        className={`${show ? "btn-danger" : "btn-success"}`}
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? " ClickMe show" : "You Hide "} 
      </button>
      <hr />
      {show ? <h1>Are You Hided Components 2</h1> : <Components2 />}
    </div>
  );
}


