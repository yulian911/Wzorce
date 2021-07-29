import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import styled from "styled-components";
import { DiaryItem, DiaryProps } from "./DiaryItem";
import { EditDiary } from "./EditDiary";

export interface DiaryState {
  id: any;
  Data: string;
  Posilek: string;
  Produkty: string;
  Miara: string;
  Uwaga: string;
}

export const Diary = () => {
  const [diarys, setDiarys] = useState<DiaryState[]>([
    {
      id: 1,
      Data: "12.01.2021",
      Posilek: "Śniadanie",
      Produkty:
        "Chleb z ziarnem domowy ,Masło , Pomidor bez skóry,Szynka polędwica, herbata czarna, cukier",
      Miara:
        "2 kromki , 2 łyżki 1 średnia sztuka,2 plasterki ,Szklanka, 1 mała łyżeczka",
      Uwaga: "Np. Zgaga, bóle nadbrzusza ",
    },
  ]);
  const [addForm, setAddFom] = useState<any>({
    Data: "",
    Posilek: "",
    Produkty: "",
    Miara: "",
    Uwaga: "",
  });

  const handleAddForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newAddForm = { ...addForm };
    if (fieldName !== null) {
      newAddForm[fieldName] = fieldValue;
    }

    setAddFom(newAddForm);
  };

  const handleAddFormatSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newDiary = {
      id: Date.now(),
      Data: addForm.Data,
      Posilek: addForm.Posilek,
      Produkty: addForm.Produkty,
      Miara: addForm.Miara,
      Uwaga: addForm.Uwaga,
    };
    
    setDiarys((prev)=>[...prev ,newDiary]);
  };

  const handleRemove =(id:number)=>{
      setDiarys(prev=>prev.filter(diary=>diary.id !==id))
  }

  return (
    <DivContainer>
      <Table>
        <thead>
          <TR>
            <TH>Data</TH>
            <TH>Posiłek</TH>
            <TH>Produkty</TH>
            <TH>Miara kuchenna</TH>
            <TH>Uwagi Doległiwości</TH>
            <TH>Akcja</TH>
          </TR>
        </thead>
        <tbody>
          {diarys.map((diary) => (
         
                <DiaryItem
                  diary={diary}
                  key={diary.id}
                  onRemove={handleRemove}
                 
                />
           
          ))}
        </tbody>
      </Table>
      <InputContainer>
        <InputWrapper>
          <Input
            type="text"
            name="Data"
            placeholder="Wpisz Date i godzinę"
            onChange={handleAddForm}
          />
          <Input
            type="text"
            name="Posilek"
            placeholder="Wpisz typ posiłku"
            onChange={handleAddForm}
          />
        </InputWrapper>
        <InputWrapper>
          <InputNext
            type="text"
            name="Produkty"
            placeholder="Jakie produkty"
            onChange={handleAddForm}
          />
          <InputNext
            type="text"
            name="Miara"
            placeholder="Jaka miara kuchenna"
            onChange={handleAddForm}
          />
        </InputWrapper>

        <InputWrapper>
          <InputSecond
            type="text"
            name="Uwaga"
            placeholder="uwagi doległiwosci"
            onChange={handleAddForm}
          />
        </InputWrapper>
        <InputWrapper>
          <Button onClick={handleAddFormatSubmit}>Dodaj</Button>
        </InputWrapper>
      </InputContainer>
    </DivContainer>
  );
};
const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px 0 0 0;
`;

const Button = styled.button`
  width: 223px;
  height: 39px;
  background-color: #92d776;
  border-radius: 17px;
  font-family: "Avenir Next";
  border: none;
  font-size: 20px;
  color: white;
  :hover {
    border: 2px solid #92d776;
    background-color: white;
    color: #92d776;
  }
`;
const Input = styled.input`
  width: 25%;
  height: 40px;
  border-radius: 15px;
  text-align: center;
  outline: none;
  border: 2px solid #d8edc4;
`;
const InputNext = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 15px;
  text-align: center;
  outline: none;
  border: 2px solid #d8edc4;
`;
const InputSecond = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 15px;
  text-align: center;
  outline: none;
  border: 2px solid #d8edc4;
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 20px 0 0 0;
`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const TH = styled.th`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 26px;
  text-align: center;
`;

const TR = styled.tr`
  background-color: #e0f2d3;
`;

//   td {
//     background-color: rgb(205, 235, 253);
//   }

//   form {
//     display: flex;
//     gap: 5px;
//   }

//   form td:last-child {
//     display: flex;
//     justify-content: space-evenly;
//   }
