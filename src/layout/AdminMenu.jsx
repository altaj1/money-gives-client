import { FaUserCog } from 'react-icons/fa'

import { BsFillMotherboardFill } from "react-icons/bs";
import MenuItem from './MenuItem';


const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={BsFillMotherboardFill} label='Manage Agent' address='ManageAgent' />
    </>
  )
}

export default AdminMenu
