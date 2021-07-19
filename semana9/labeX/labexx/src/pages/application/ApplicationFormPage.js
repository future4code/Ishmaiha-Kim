import React, {useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";


const Title = styled.h2` 
    display: flex;
    justify-content: center;
`

const Buttons = styled.div` 
    display: flex;
    justify-content: center;
    margin: 10px;
`

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
`

const Options = styled.select` 
    border-radius: 3px;
    margin: 3px;
`

const Write = styled.input` 
    border-radius: 3px;
    margin: 3px;
`

const TwoButtons = styled.button` 
    margin: 0 25px;
`

export const ApplicationFormPage = () => {

    const [name, setName] = useState ("")
    const [age, setAge] = useState ()
    const [motivation, setMotivation] = useState ("")
    const [job, setJob] = useState ("")
    const [country, setCountry] = useState ("")
    

    const history = useHistory ();

    const backToListTrip = () => {
        history.push ("/trips/list");
    }
      
    const onSubmitApplication = () => {
        const body = {
            name: name,
            age: age,
            applicationText: motivation,
            profession: job,
            country: country
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ishmaiha-kim-molina/trips/NoIFVcOiSgTKTIPVZwXS/apply", body)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err.res)
            })
    };

    const onChangeName = (e) => {
        setName (e.target.value);
      }

    const onChangeAge = (e) => {
        setAge (e.target.value);
    }

    const onChangeMotivation = (e) => {
        setMotivation (e.target.value);
    }

    const onChangeJob = (e) => {
        setJob (e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry (e.target.value);
    }



    return (
      <div>
        <Title>Inscreva-se!!!</Title>
        <ContainerGeral>
            <Options>
                <option value="">Escolha uma viagem</option>
            </Options>
            <Options>
                <option value="country">Escolha um país</option>
            </Options>
            <Write  onChange = {onChangeName} placeholder="Nome"></Write>
            <Write  onChange = {onChangeAge} placeholder="Idade"></Write>
            <Write  onChange = {onChangeMotivation} placeholder="Venda seu peixe!"></Write>
            <Write  onChange = {onChangeJob} placeholder="Profissão"></Write>
            <Write  onChange = {onChangeCountry} placeholder="Country"></Write>
        </ContainerGeral>
        <Buttons>
            <TwoButtons onClick = {backToListTrip} >Go Back </TwoButtons>
            <TwoButtons onClick = {onSubmitApplication} >Send</TwoButtons>
        </Buttons> 
      </div>
    );
  }
