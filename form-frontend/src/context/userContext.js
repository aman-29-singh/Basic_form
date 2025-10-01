// import React, { createContext, useState } from 'react'
// export const userContext = createContext()

// const UserProvider = ({children}) => {
//     const [user, setUser]= useState({firstname:"aman",lastname:"singh"})
//   return (
//     <userContext.Provider value={{user,setUser}}>
//         {children}
//     </userContext.Provider>
//   )
// }

// export default UserProvider

import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ firstname: "aman", lastname: "singh" })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
