import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios"
import { useHistory } from "react-router";


const Title = styled.h2` 
    display: flex;
    justify-content: center;
`

const CentralContainer = styled.div` 
    display:flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;;
    padding: 5px;
`

const TwoButtons = styled.div`
    display:flex;
    justify-content: center;
    
`
const Buttons = styled.button`
    margin: 30px 35px;
`


export const ListTripsPage = () => {

    const [tripList, setTrips] = useState ([])

    useEffect (() => {
        getAllTrips()
    }, []);

    const getAllTrips = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ishmaiha-kim-molina/trips")
        .then((res) => {
            setTrips(res.data.trips) //trips é o nome da constante em que estão os objetos da API
            console.log(res.data.trips)
        })
        .catch ((err) => {
            console.log(err)    
        })
        
    };

    const history = useHistory();

    const goHome = () => {
        history.push ("/")
    }

    const goSignIn = () => {
        history.push ("/trips/application")
    }

    return (
      <div>
        {<Title>Lista de Viagens</Title>}
        {tripList.map(({id, name, date, planet, description, durationInDays}) => {
            return (
                <CentralContainer key = {id} >
                    <p><b>Nome: </b> {name}</p>
                    <p><b>Descrição: </b>{description}</p>
                    <p><b>Planeta: </b>{planet}</p>
                    <p><b>Duração: </b>{durationInDays}</p>
                    <p><b>Data: </b>{date} </p>
                </CentralContainer>
            )
        })}
        <TwoButtons>
            <Buttons onClick = {goHome} >Return</Buttons>
            <Buttons onClick = {goSignIn} >Join us</Buttons>
        </TwoButtons>  
      </div>
    );

}


