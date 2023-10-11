import { useEffect, useState } from "react";

export default function Components2() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState([0]);
  useEffect(() => {
    setState2([state]);
  }, [state]);

  return (
    <div className="App" style={{disPlay:"flex"}}>
      <h1>Your Component ສະບາຍດີ  2</h1>
      <button
        className="btn-success"
        onClick={() => {
          setState(state + 1);
        }}
      >
        ClickMePlush
      </button>
      <h2>
        {state2.map((item, index) => {
          return (
            <>
            <div >
              <h1 key={index + 1}>
                <button className="btn-danger">Your NumberClick ={item}</button>
              </h1>
            </div>
            </>

          );
        })}
      </h2>
    </div>
  );
}
