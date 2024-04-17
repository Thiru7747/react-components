/*
Because event handlers are declared inside of a component, 
they have access to the component’s props. Here is a button that, 
when clicked, shows an alert with its message prop:
*/
import { generateOTP } from "./Utils";
const OTP = generateOTP(6)

function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message+": "+OTP)}>
            {children}
        </button>
    );
}

export default function Eventhandlers() {
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
            <AlertButton message="Your OTP">
                Generate OTP
            </AlertButton>
        </div>
    );
}