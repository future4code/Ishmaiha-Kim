import { useHistory } from "react-router";
import { useEffect } from "react";

const GoToFeedPage = (history) => {
    history.push("/FeedPage")
} 

export const UseUnprotectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token){
            GoToFeedPage(history)
        }
    }, [history])
}