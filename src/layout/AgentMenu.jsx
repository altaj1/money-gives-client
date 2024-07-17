import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsFillMotherboardFill } from "react-icons/bs";

const AgentMenu = () => {
    return (
        <div>
             {/* <MenuItem icon={FaUserCog} label='Registra' address='manage-users' /> */}
             <MenuItem icon={BsFillMotherboardFill} label='Manage Agent' address='ManageAgent' />
        </div>
    );
};

export default AgentMenu;