import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 10% 0;
    padding: 0 5%;
`

export const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
    width: auto;
   
`

export const Image = styled.Image`
    display: flex;
    width: 90%;
    object-fit: contain;
    margin: 60px;
`

export const WrapperSenha = styled.View`
    width: 100%;
    align-items: flex-end;
`

export const ButtonLogin = styled.TouchableOpacity`
    width: 100%;
    margin: 30px 0px 15px 0px;
    justify-content: center;
`

export const TextButton = styled.Text`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    height: 60px;
    padding-top: 19px;
    font-size: 20px;
`
