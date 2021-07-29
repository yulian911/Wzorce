import styled from "styled-components";
import { DiaryState } from "./Diary";

export interface DiaryProps {
  diary: DiaryState;
  handleEdit(e: React.MouseEvent<HTMLButtonElement>, diary: DiaryState): void;
}

export const DiaryItem = ({ diary, handleEdit }: DiaryProps) => {
  return (
    <TR>
      <TD>{diary.Data}</TD>
      <TD>{diary.Posilek}</TD>
      <TD>{diary.Produkty}</TD>
      <TD>{diary.Miara}</TD>
      <TD>{diary.Uwaga}</TD>
      <TD>
        <button onClick={(e) => handleEdit(e, diary)}>Edycja</button>
      </TD>
    </TR>
  );
};

const TR = styled.tr`
  background-color: #e0f2d3;
`;
const TD = styled.td`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 4px;
  font-size: 21px;
 
  }
`;
