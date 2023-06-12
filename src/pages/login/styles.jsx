import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 150px;
  background-color: #fff;
`;
export const ImageHeader = styled.Image`
  width: 100%;
  height: 208px;
  object-fit: cover;
`;

export const ImageFooter = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  width: 320px;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 50px;
  padding-top: 12px;
  margin: 20px;
`
