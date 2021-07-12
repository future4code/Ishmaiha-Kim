import React from "react";
import styled from "styled-components";


const GeneralContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserAnswers = styled.div`
  display: flex;
  flex-direction: column;
`

const UserText = styled.input` 
  margin: 5px;
  width: 300px;
`

const UserOptions = styled.select` 
  margin: 5px;
  width: 308px;
`


export const CreateTripPage = () => {
    return (
      <GeneralContainer >
        <h2>Create Travel</h2>
        <UserAnswers>
          <UserText placeholder = "Name"></UserText>
          <UserText placeholder = "Description"></UserText>
          <UserText placeholder = "Duration in days"></UserText>
          <UserOptions name = "countries" id= "countries" placeholder = "Countries">
            <option value="">Select country</option>
            <option value="Angola">Angola</option>
            <option value="Egypt">Egypt</option>
            <option value="Cingapura">Cingapura</option>
            <option value="Ireland">Ireland</option>
          </UserOptions>
          {/* <input placeholder = "Date" type = "date" required-min="2021-07-08"> dd/mm/yyyy</input> */}
        </UserAnswers>
      </GeneralContainer>
    );
  }
  
