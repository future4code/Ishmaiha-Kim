import axios from "axios";
import React, {useState, useEffect } from "react";
import styled from "styled-components";
import { FcApproval} from "react-icons/fc";
import { FcDislike} from "react-icons/fc";
import Matches from "../PaginaMatches/Matches.js"

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
`

const Card = styled.div` 
    max-width: 25vw;     
    width: 100%;   
    margin: 0 auto;     
    box-shadow: 0 4px 8px 2px rgba(0,0,0,0.2);     
    transition: 0.3s;     
    border-radius: 5px;      
    :hover{         
        box-shadow: 0 8px 16px 2px rgba(0,0,0,0.2)     
    }   
    
`
const CardImg = styled.div`     
    max-width: 100%;     
    height: 350px;     
    background-image: url(${({url})=>url});     
    background-repeat: no-repeat;     
    background-position: top center;     
    background-size: cover;     
    border-radius: 5px 5px 0 0;     
    display: flex;     
    align-items: flex-end;     
`
const ContainerDescription = styled.div`
    width: 100%;     
    padding: 10px 15px;     
    height: 110px;     
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
`     

const Name = styled.div`
    font-style: oblique;
    color: White;
    font-size: 15px;
`

const Description = styled.p`
    font-style: oblique;
    color: White;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    color: #FA7E52;
    margin-bottom: 10px;
`



export default function Photo (){

    const [infoProfile, setInfoProfile] = useState ({})
    

    useEffect (() => {
        getAPI()   
    }, [])

    const getAPI = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ishmaiha/person")
        .then((res) => {
            setInfoProfile(res.data.profile) 
        })
        .catch((err) => {
            console.log("errou")
        } 
        )}
        console.log(infoProfile);

    
    // useEffect (() => {
    //     matchPage()
    // }, [])

    // const matchPage = () => {
    //     axios.get (
    
    
    
    //         )}
    
   


   
        return (
            <Card key = {infoProfile.id}>
                <Title>AstroMatch</Title>
                <CardImg url={infoProfile.photo}>
                    <ContainerDescription>
                        <Name>{infoProfile.name},<span>{infoProfile.age}</span></Name>
                        <Description>{infoProfile.bio}</Description>
                    </ContainerDescription>
                </CardImg>  
                    
                <Buttons>
                    <FcApproval />
                    <FcDislike/>
                </Buttons>
                   
            </Card>
        )
    }
