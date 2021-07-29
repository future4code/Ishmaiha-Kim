import { useHistory } from "react-router";
import { useEffect } from "react";

const goToLogin = (history) => {
    history.push("/")
} 

export const useProtectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token){
            goToLogin(history)
        }
    }, [history])
}