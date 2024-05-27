import React from "react";
import { IoIosLock } from "react-icons/io";
export default function SignIn() {
  return (
    <>
      <div className="btns">
        <button>Sign In</button>
        <button>Join In</button>
      </div>
      <div className="Authform">
        <div className="authlogin">
          <button>Continue With Google</button>
          <button>Continue With Facebook</button>
        </div>
        <div>
         <hr />
          <span >or Sign with</span>
        </div>
        <div className="id-pass">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="check-forgot">
          <div className="checkbox">
            <input type="checkbox" name="Remember" id="" />
            Remember
          </div>
          <div>
          <IoIosLock style={{fontSize:"1.15rem" , paddingRight:"5px"}}/>
            Forgot Passward
          </div>
        </div>
        <button type="submit" className="btn">Continue</button>
      </div>
    </>
  );
}
