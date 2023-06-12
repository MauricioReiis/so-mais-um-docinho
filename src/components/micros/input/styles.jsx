import styled from "styled-components/native";

export const Container = styled.View`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;
export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 42px;
  right: -130px;
`;
export const Label = styled.Text`
  width: 100%;
  color: #0000009d;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  margin: 5px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color:#667085;
  font-size: 16px;
`;