import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../ReUseCom/LoadingSpinner";
import AgentDataRow from "../../TableDataRow/AgentDataRow";

const ManageAgent = () => {
    const axiosSecure = useAxiosSecure()
    const [search, setSearch] = useState('')
      
      const [searchText, setSearchText] = useState('')
      const handelSearch = (e)=>{
          e.preventDefault()
          // console.log("ouch")
          setSearch(searchText)
      }
    //   Fetch users Data
    const {
      data: users = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ['users', search],
      // enabled: !!search, 
      queryFn: async () => {
        const { data } = await axiosSecure(`/users/agent?search=${search}`)
        return data
      },
      
    })
  
    console.log(users, "this is all user")
    if (isLoading) return <LoadingSpinner />
    return (
        <>
        <div>
      <h1 className="text-3xl">Manage Agent</h1>
    </div>
        <div>
        <form onSubmit={handelSearch}>
                  <input
                    className="input text-gray-900 w-80"
                    type="text"
                    placeholder="Enter search text"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                  />
                  <br />
                  <input
                    className="p-3 mt-5 text-center font-medium text-white transition duration-200 hover:cursor-pointer rounded shadow-md bg-[#FF6F61]"
                    type="submit"
                    value="Search"
                  />
                </form>
        </div>
          <div className='container mx-auto px-4 sm:px-8'>
           
            <div className='py-8'>
              <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                  <table className='min-w-full leading-normal'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                        >
                          Email
                        </th>
    
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                        >
                         Role
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                        >
                       Permission
                        </th>
                        {/* <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                        >
                          Un Block User
                        </th> */}
                        
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user =><AgentDataRow
                          key={user?._id}
                          user={user}
                          refetch={refetch}
                        />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default ManageAgent;