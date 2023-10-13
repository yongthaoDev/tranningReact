import { useEffect, useState } from "react";

export default function Components2() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState([0]);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  useEffect(() => {
    setState2([state]);
  }, [state]);

  const handleInput = (e) => {
    const newValue = e.target.value;
    setFirstName(newValue);
  };
  const handleInputLastName = (e) => {
    const newValue = e.target.value;
    setLastName(newValue);
  };
  const handleInputPhoneNumber = (e) => {
    const newValue = e.target.value;
    setPhoneNumber(newValue);
  };
  const handleInputEmail = (e) => {
    const newValue = e.target.value;
    setEmail(newValue);
  };

  return (
    <div className="App" style={{ disPlay: "flex" }}>
      <h1>Your Component ສະບາຍດີ 2</h1>
      <button
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
              <div>
                <h1 key={index + 1}>
                  <button className="btn-danger">
                    Your NumberClick ={item}
                  </button>
                </h1>
              </div>
            </>
          );
        })}
      </h2>
      <div className="row">
        <div className="col-6">
          <div
            className="card"
            style={{
              backgroundColor: "teal",
              padding: "auto",
            }}
          >
            <div className="row px-5 py-2">
              <div className="col-6 text-start" style={{color:'white'}}>
                First Name
                <input
                  type="text"
                  className="form-control my-1"
                  value={FirstName}
                  onChange={handleInput}
                  placeholder="first name"
                />
              </div>
              <div className="col-6 text-start" style={{color:'white'}}>
                Last Name 
                <input
                  type="text"
                  className="form-control my-1"
                  value={LastName}
                  onChange={handleInputLastName}
                  placeholder="last name"
                />
              </div>
              <div className="col-6 my-1 text-start" style={{color:'white'}}>
                Phone Number 
                <input
                  type="text"
                  className="form-control"
                  value={PhoneNumber}
                  onChange={handleInputPhoneNumber}
                  placeholder="number"
                />
              </div>
              <div className="col-6 my-1 text-start Light" style={{color:'white'}}>
                Email:
                <input
                  type="text"
                  className="form-control"
                  value={Email}
                  onChange={handleInputEmail}
                  placeholder="email"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="card text-start"
            style={{
              backgroundColor: "teal",
              padding: "5px",
              height: "350px",
              color: "white",
            }}
          >
            <div className="col-6 my-1 mx-2">
              <div>First name: {FirstName}</div>
              <div>Last name: {LastName}</div>
              <div>Number: {PhoneNumber}</div>
              <div>Email: {Email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
