import { createContext, useEffect, useState } from "react";
export const GlobalConten = createContext({})
const ISSERVER = typeof window === 'undefined'
import { useRouter } from 'next/router'


const GlobalProvider = ({ children }) => {
    const router = useRouter()
    const [token, setToken] = useState(!ISSERVER ? localStorage.getItem('token') || false : '')
    const [data, setData] = useState('')

    //untuk post data login dan menyimpan token dalam cookies localstorage browser
    const adminLogin = async (data) => {
        const { password, email } = data
        const res = await (await fetch('http://localhost:4001/users/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })).json()
        if (res.success) {
            alert(res.message);
                email: '';
                password: ''
                localStorage.setItem('token',res.data.token)
                setToken(res.data.token) 
                console.log(res.data)
                router.push('/')
        } else {
            alert(res.message)
            console.log(res)
        } 
    }

    //get admin username
    const getAdmin = async () => {
        const res = await (await fetch('http://localhost:4001/users', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,
            token : localStorage.getItem('token')    
        }
        })).json()
        setData(res.data[0])
        console.log(res.data[0])

    }

    //function logout
    const adminLogout = () => {
        setToken('')
        localStorage.removeItem('token')
        router.push('/login') 
    }

    //
    useEffect(()=> {
        getAdmin()
    },[])


    return (
        <div>
            <GlobalConten.Provider value={{ token, adminLogin, adminLogout, data  }}>
                {children}
            </GlobalConten.Provider>
        </div>
    )
}

export default GlobalProvider

