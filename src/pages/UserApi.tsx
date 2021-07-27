import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Container } from "../components/Container/Container";
import { useTypeSelector } from "../components/hook/useTypeSelector";
import { fetchUsers } from "../store/action";

export const UserApi = () => {
  const { users, error, loading } = useTypeSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container>
      <UsersBox>
        {users.map((user) => (
          <User>{user.name}</User>
        ))}
      </UsersBox>
    </Container>
  );
};

const UsersBox = styled.div`
  width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 15px;
  box-shadow: -6px -4px 34px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -6px -4px 34px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px -4px 34px 0px rgba(0, 0, 0, 0.75);
`;
const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 50px;
  padding: 10px 25px;
  border-radius: 15px;
  border: 2px solid #ee6e73;
  margin: 10px 0;
`;
