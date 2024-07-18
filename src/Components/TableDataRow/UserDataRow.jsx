import { useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";



const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useAuth();
  
  const [status, setStatus] = useState("")
  const [role, setRole] = useState(user?.role);
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async role => {
        console.log(role)
      const { data } = await axiosSecure.put(
        `/users/update/${user?.email}`,
        role
      )
      return data
    },
    onSuccess: data => {
      refetch()
      console.log(data)
     
      
    },
  });

 const handelStatus = () =>{
    if (status == "Approve") {
        mutateAsync({
            status:status,
            balance: 40
        })
    }
    else{
        mutateAsync({
            status:status,
            role:"User"
        })
    }
  
 }

 const handelRole = ()=>{
    mutateAsync({role:role})
 }

  
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
     

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
        {/* <select onChange={(e) => setRole(e.target.value)}
        className="bg-base-200 p-1 rounded-xl"
        >
          <option>{user.role}</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Agent">Agent</option>
        </select>
        <button onClick={handelRole}  className="bg-[#FF6F61] p-1 rounded-xl" >OK</button> */}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select onChange={(e) => setStatus(e.target.value)}
        className="bg-base-200 p-1 rounded-xl"
        >
          {/* <option>Select</option> */}
          <option >{user.status}</option>
          <option value="Approve">Approve</option>
          <option value="Block">Block</option>
          <option value="Unblock">Unblock</option>
        </select>
        <button onClick={handelStatus}  className="bg-[#FF6F61] p-1 rounded-xl" >OK</button>
       
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select onChange={(e) => setUnBlock(e.target.value)}
        className="bg-base-200 p-1 rounded-xl"
        >
          <option>Select</option>
          <option value="Unblock">Unblock</option>
        </select>
        <button onClick={handelUnBlock}  className="bg-[#FF6F61] p-1 rounded-xl" >OK</button>
       
      </td> */}
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserDataRow;
