import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Container } from "../components/Container/Container";
import { useTypeSelector } from "../components/hook/useTypeSelector";
import { Button } from "../components/Todo/ListTodo";
import { CounActionTypes } from "../store/redux/countReducer";

export const Count = () => {
  const count = useTypeSelector((state) => state.count);
  const dispatch = useDispatch();
  const plusHandle = () => {
    dispatch({ type: CounActionTypes.INCREMENT });
  };
  const minusHandle = () => {
    dispatch({ type: CounActionTypes.DECREMENT });
  };

  return (
    <Container>
      <CountBox>
        <Text>{count.count}</Text>
      </CountBox>
      <BoxButton>
        <Button onClick={plusHandle}>+</Button>
        <Button onClick={minusHandle}>-</Button>
      </BoxButton>
    </Container>
  );
};
const BoxButton = styled.div`
  margin: 15px 0;
`;
const Text = styled.div`
  font-size: 75px;
  color: grey;
`;
const CountBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 30px;
  box-shadow: -6px -4px 34px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -6px -4px 34px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px -4px 34px 0px rgba(0, 0, 0, 0.75);
`;
