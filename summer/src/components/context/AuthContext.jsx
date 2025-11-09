import { createContext, useContext, useState, useEffect } from "react";
import { login, logout, onUserStateChange } from "../../api/firebase";
const AuthContext = createContext();

export function AuthContextProvider({ children}) {
const [user, setUser] = useState();
    useEffect(() => { // 어플리케이션 전반적으로 동일한 데이터 접근 -> context를 사용해야 한다.
        onUserStateChange(user => {
            console.log(user);
            setUser(user);
        });
    },[]);

    return <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext);
}