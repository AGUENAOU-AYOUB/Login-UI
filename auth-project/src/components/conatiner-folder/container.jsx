import SignIn from "../sign-folder/sign-in";
import LogIn from "../log-folder/log-in";
import './container.css';
import Toggle from "../toggle/toggle";
function Container(){
    return (
        <div className="parent-cont">
            <SignIn/>
            <LogIn/>
            <Toggle className="floatToggle"/>
        </div>
    );
}
 export default Container;