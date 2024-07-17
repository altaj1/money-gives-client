import useAuth from "../../../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
const Profile = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div className="flex flex-col pt-24 justify-center items-center">
           <h1 className="text-4xl"> <CgProfile /></h1>
           <h1 className="text-2xl">Name: {user.displayName || user?.name}</h1>
           
           <h1 className="text-xl">Role: {user.role}</h1>
           <h1 className="text-xl">Balance: {user?.balance || 0}</h1>
           
        </div>
    );
};

export default Profile;