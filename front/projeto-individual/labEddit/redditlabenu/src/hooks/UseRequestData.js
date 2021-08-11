import { useEffect, useState } from "react";
import axios from "axios"

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState (initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then ((res) => {
            setData (res.data)
        })
        .catch((err)=> {
            alert ("error")
        })
    }, [url])

    return (data)
}