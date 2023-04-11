import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            {isAuthenticated &&
                <div className="flex">
                    <img className="rounded-full w-12" src={user.picture} alt={user.name} ></img>
                    <h2 className="text-md text-xs ml-3 mt-2 flex-col">
                        {user.name}
                        <div>
                            <LogoutButton />
                        </div>
                    </h2>
                </div>
            }
        </div>
    )
}

export default Profile