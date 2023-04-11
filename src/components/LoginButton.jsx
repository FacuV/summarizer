import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button
        className="bg-transparent bg-blue-700 rounded  text-blue-700"
        onClick={() => loginWithRedirect()}
    >
        Log In
    </button>

};

export default LoginButton;