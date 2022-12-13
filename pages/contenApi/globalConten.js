// import { createContext, useEffect, useState } from "react";
// export const GlobalConten = createContext({})


// const GlobalProvider = ({children}) => {

// const [isLoginId,setIsLoginId] = useState (false)
// const [data,setData] = useState ({})
// const getUser = async () => {
//     const res = await (await fetch('http://localhost:4001/users/1')).json()
//     const response = res.data[0]
//     console.log(response)
//     if (response.success) {
//         setData(response.data)
//         setIsLoginId(true)
//     }
// }

// useEffect (()=>{
//    getUser() 
// },[])


//   return (
//     <div>
//       <GlobalConten.Provider value={{ isLoginId , getUser, data}}>
//          {children}
//       </GlobalConten.Provider>
//     </div>
//   )
// }

// export default GlobalProvider

