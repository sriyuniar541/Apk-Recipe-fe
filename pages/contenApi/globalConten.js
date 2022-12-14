import { createContext, useState } from "react";
export const GlobalConten = createContext({})
const ISSERVER = typeof window === 'undefined'
import { useRouter } from 'next/router'


const GlobalProvider = ({ children }) => {
    const router = useRouter()
    const [token, setToken] = useState(!ISSERVER ? localStorage.getItem('token') || false : '')


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
                console.log(res.data.token)
                router.push('/')
        } else {
            alert(res.message)
            console.log(res)
        }
    }

    const adminLogout = () => {
        setToken('')
        localStorage.removeItem('token')
        router.push('/login')
    }


    return (
        <div>
            <GlobalConten.Provider value={{ token, adminLogin, adminLogout }}>
                {children}
            </GlobalConten.Provider>
        </div>
    )
}

export default GlobalProvider

