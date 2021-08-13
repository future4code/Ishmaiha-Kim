import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios"

export const AdminHomePage = () => {

  const Title = styled.h2` 
    display: flex;
    justify-content: center;
  `

  const ButtomContainer = styled.div` 
    display: flex;
    justify-content: center;
  `

  const Buttons = styled.button` 
    margin: 5px 25px;
  `

  const CentralContainer = styled.div` 
    display:flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    border: 1px solid;
    padding: 5px;
  `

  const Names = styled.p`
    margin: auto;
  `

  const history = useHistory();

  const goBack = () => {
    history.push ("/")
  }

  const createTravel = () => {
    history.push ("/admin/trips/create")
  }

  const goToTripDetails = () => {
    history.push ("/admin/trips/:id")
  }

  const [tripName, setTripName] = useState ([])

  useEffect (() => {
    getAllTripNames()
  }, []);

  const getAllTripNames = () => {
      axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ishmaiha-kim-molina/trips")
      .then((res) => {
          setTripName(res.data.trips) //trips é o nome da constante em que estão os objetos da API
          console.log(res.data.trips)
      })
      .catch ((err) => {
          console.log(err)    
      })
      
  };

    return (
      <div>
        <Title>Admin Panel</Title>
        {tripName.map(({id, name}) => {
            return (
                <CentralContainer key = {id} >
                    <Names>{name}</Names>   
                </CentralContainer>
            )
        })}
        <ButtomContainer>
          <Buttons onClick = {goBack}>Return</Buttons>
          <Buttons onClick = {createTravel}>Create travel</Buttons>
          <Buttons onClick = {goToTripDetails}>Trip Details</Buttons>
        </ButtomContainer>
      </div>
    );
  }
  
