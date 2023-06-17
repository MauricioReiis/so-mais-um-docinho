import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 8% 0%;
    padding: 0% 5%;
`

export const ProfileContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    overflow: hidden;

`

export const ProfileImage = styled.View`
    border-radius: 999px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 80%;
    aspect-ratio: 1/1;
    overflow: hidden;
`