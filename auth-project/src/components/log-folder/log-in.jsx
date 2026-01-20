import './log-in.css';
import { useRef } from 'react';

function LogIn(){
    const emailRef = useRef(null);
  const passwordRef = useRef(null);


  function LogInBtn(event){
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const storedEmail = JSON.parse(localStorage.getItem(email)|| []);
  


  };
    return (
        <div className="container">
            <h1>LOG IN</h1>
            <div class="icons">
               <a href="" className='icn'> <i className="fa-brands fa-github"></i></a>
                <a href="" className='icn'><i className="fa-brands fa-facebook-f"></i></a>
                <a href="" className='icn'><i className="fa-brands fa-google"></i></a>
                <a href="" className='icn'><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <form className="form-2">
                <input type="email" placeholder="Email" id="email" name="email" ref={emailRef}required/>
                <input type="password" placeholder="Password" id="password" name="password" ref={passwordRef} required/>
                <a href="" className="forgot-pswd" id="forgotPassword"><i>Forgot Password?</i></a>
            </form>
            <button type="submit" className="btn">Log In</button>
        </div>
    );
}

export default LogIn;