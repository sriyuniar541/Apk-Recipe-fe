import { createContext, useEffect, useState } from "react";
export const GlobalConten = createContext({})
const ISSERVER = typeof window === 'undefined'
import { useRouter } from 'next/router'


const GlobalProvider = ({ children }) => {
    const router = useRouter()
    const [token, setToken] = useState(!ISSERVER ? localStorage.getItem('token') || false : '')
    const [user, setUser] = useState(!ISSERVER ? localStorage.getItem('data') || false : '')
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
                localStorage.setItem('data', JSON.stringify(res.data))
                localStorage.setItem('token',JSON.stringify(res.data.token))
                setUser(res.data) 
                setToken(res.data.token) 
                // console.log(res.data.data)
                router.push('/ ')
        } else {
            alert(res.message)
            console.log(res)
        } 
    }

    //function logout
    const adminLogout = () => {
        setToken('')
        localStorage.removeItem('token')
        localStorage.removeItem('data')
        router.push('/login') 
    }

    return (
        <div>
            <GlobalConten.Provider value={{ token, adminLogin, adminLogout, data , user }}>
                {children}
            </GlobalConten.Provider>
        </div>
    )
}

export default GlobalProvider

