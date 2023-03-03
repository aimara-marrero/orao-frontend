import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";
const RoutesWithUserComponent = () => {

    return (
        <>
            <UserChatComponent />
            <Outlet />
        </>
    )
}

export default RoutesWithUserComponent;