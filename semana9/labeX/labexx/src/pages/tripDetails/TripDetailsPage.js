import React, {useEffect} from "react";
import axios from "axios"



export const TripDetailsPage = () => {
  useEffect (() => {
    axios.get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ishmaiha-kim-molina/trip/1HVce1KqCoEEZec50f6h", {
        headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imw5WFlsZ05VRDBZZldZeW5UNDVaIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20iLCJpYXQiOjE2MjU5NjY1OTh9.fSdG7ljgJT3-gGnbvkXs51neVShGzfrpJEw"  
        }
    })  
    .then ((res) => {
        console.log ("Good!", res.data)
      }) .catch ((err) => {
            console.log ("Error", err.res)
      })
}, [])
    return (
      <div >
        <h2>Trip Details</h2>
      </div>
    )
};
  
