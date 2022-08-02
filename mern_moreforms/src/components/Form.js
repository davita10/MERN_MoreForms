import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    // never want to refresh page in react so e.preventDefault();
    e.preventDefault();
    if (firstName && lastName && email && password && confirmPassword) {
      console.log({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
    } else {
      <p className="text-danger">ALL FIELDS MUST BE FILLED!</p>;
      // below resets state
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <form onSubmit={submitHandler} className=" border bg-secondary ">
      {/* onSubmit={submitHandler} connects to const submitHandler and activates */}
      <div className="form-group mb-3">
        <label>First Name:</label>
        {/* add synthetic event with anonymous function ()=>{} andThe Event Object e */}
        {/* e.target.value stores in State */}
        <input
          type="text"
          value={firstName}
          //   value={prop} resets form to clear state
          onChange={(e) => {
            console.log("This is the event object: ", e);
            console.log("This is e.target: ", e.target);
            console.log(e.target.value);

            setFirstName(e.target.value);
          }}
        />
        {/* Ternery Operators for Form Validation/ Error messages */}
        {firstName && firstName.length < 2 ? (
          <p className="text-danger">Name must be at least 2 characters!</p>
        ) : null}
      </div>
      <div className="form-group mb-3">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {lastName && lastName.length < 2 ? (
          <p className="text-danger">Name must be at least 2 characters!</p>
        ) : null}
      </div>
      <div className="form-group mb-3">
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && email.length < 5 ? (
          <p className="text-danger">Email must be at least 5 characters!</p>
        ) : null}
      </div>
      <div className="form-group mb-3">
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && password.length < 8 ? (
          <p className="text-danger">Password must be at least 8 characters!</p>
        ) : null}
      </div>
      <div className="form-group mb-3">
        <label>Confirm Password:</label>
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPassword && confirmPassword !== password ? (
          <p className="text-danger">Passwords must match!</p>
        ) : null}
      </div>
      <div className="form-group mb-3">
        <button className="btn btn-info">Add Person</button>
      </div>
    </form>
  );
};

export default Form;
