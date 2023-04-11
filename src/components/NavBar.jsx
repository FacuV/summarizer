import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton"
import Profile from "./Profile"

const NavBar = () => {

    const { isAuthenticated } = useAuth0()
    
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Summarizer</span>
                <div className="flex w-full md:block md:w-auto" id="navbar-default">
                    <ul>
                        {!isAuthenticated && 
                            <li>
                                <LoginButton/>
                            </li>
                        }
                        <li>
                            <Profile/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar