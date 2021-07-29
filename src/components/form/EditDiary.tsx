import styled from "styled-components";
import { DiaryState } from "./Diary";

interface DiaryProps {
  handleEditFormChange(): void;
  editForm: any;
  handleEditFormSubmit(): void;
}

export const EditDiary = ({
  handleEditFormChange,
  editForm,
  handleEditFormSubmit,
}: DiaryProps) => {
  return (
    <TR>
      <TD>
        <input
          type="text"
          name="Data"
          placeholder="Wpisz Date i godzinę"
          onChange={() => handleEditFormChange}
          value={editForm.Data}
        />
      </TD>
      <TD>
        <input
          type="text"
          name="Posilek"
          placeholder="Wpisz typ Posiłku"
          onChange={handleEditFormChange}
          value={editForm.Posilek}
        />
      </TD>
      <TD>
        <input
          type="text"
          name="Produkty"
          placeholder="jakie produkty"
          onChange={handleEditFormChange}
          value={editForm.Produkty}
        />
      </TD>
      <TD>
        <input
          type="text"
          name="Miary"
          placeholder="jaka miara kuchenna"
          onChange={handleEditFormChange}
          value={editForm.Miary}
        />
      </TD>
      <TD>
        <input
          type="text"
          name="Uwaga"
          placeholder="uwagi doległiwości"
          onChange={handleEditFormChange}
          value={editForm.Uwaga}
        />
      </TD>
      <TD>
        <button onClick={handleEditFormSubmit}>Zapisz</button>
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
`;
