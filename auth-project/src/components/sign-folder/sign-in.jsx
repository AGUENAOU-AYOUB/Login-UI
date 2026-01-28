import "./sign-in.css";
import { useRef } from "react";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confPasswordRef = useRef(null);
  function signInBtn(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPassword = confPasswordRef.current.value;

    if (
      email.includes("@gmail.com") &&
      password.length >= 8 &&
      password === confPassword
    ) {
        localStorage.setItem('eamil', email);
        localStorage.setItem('password', password)
      alert("good");
    } else alert("invalide infos");
  }
  return (
    <div className="container">
      <h1>SIGN IN</h1>
      <div className="icons">
        <a href="" className="icn">
          {" "}
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="" className="icn">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="" className="icn">
          <i className="fa-brands fa-google"></i>
        </a>
        <a href="" className="icn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <form className="form-1">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          ref={emailRef}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          ref={confPasswordRef}
          required
        />
      </form>
      
      <button type="submit" className="btn" onClick={signInBtn}>
        Sign In
      </button>
      <div className="image"></div>
    </div>
  );
}

export default SignIn;
