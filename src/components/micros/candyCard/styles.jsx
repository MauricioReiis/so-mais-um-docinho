import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
display: flex;
justify-content: center;

background: #F9F9F9;
border: 0.5px solid rgba(0, 0, 0, 0.07);
box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
border-radius: 12px;

width: 390px;
min-height: 150px;
height: fit-content;
`

export const Box = styled.View`
    display: flex;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-around;
`

export const TextField = styled.View`
    display: flex;
`

export const Name = styled.Text`
    color: #000000;
    font-size: 20px;
    font-weight: bold;
`

export const Amount = styled.Text`
    color: #000000;
    font-size: 10px;
`

export const Price = styled.Text`
    color: #969696;
    font-size: 10px;
    margin-top: 10px;
`

export const Icon = styled.Image`
width: 50px;
height: 50px;
object-fit: cover;

background: ${props => props.fav ? "#000000" : "transparent"};
`

export const IconButton = styled.Image`
width: 15px;
height: 15px;
object-fit: cover;
`

export const Settings = styled.View`
    display: flex;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-around;
    margin-top: 30px;
`

export const ButtonBox = styled.View`
    display: flex;
    flex-direction: row !important;
    gap: 10px;
`

export const Button = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;

width: 106px;
height: 33px;

background: #E7E5E5;
border-radius: 5px;

font-weight: 500 !important;
font-size: 10px !important;
align-items: center !important;
color: #676767 !important;
`

export const DeleteButton = styled.TouchableOpacity`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;

width: 43px;
height: 33px;

background: #909090;
border-radius: 5px;
`