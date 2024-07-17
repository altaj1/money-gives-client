

import { BsFingerprint } from "react-icons/bs"
import { FcSettings } from "react-icons/fc";
import { MdAppRegistration } from "react-icons/md";
import MenuItem from "./MenuItem";

const UserMenu = () => {

  return (
    <>
      <MenuItem
        icon={MdAppRegistration}
        label='Agent Registration'
        address='agent-registration'
      />
      <MenuItem
        icon={BsFingerprint}
        label='My Winning Contest Page'
        address='myWinningContest'
      />
        <MenuItem
            label='Profile'
            address='profile'
            icon={FcSettings}
          />

    </>
  )
}

export default UserMenu
