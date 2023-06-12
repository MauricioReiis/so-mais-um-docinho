import React from "react";
import * as S from "./styles";
// import { useNavigation } from "@react-navigation/native";
import { Text, Alert } from "react-native";
import { InputComponent } from "../../components/micros";

export const Register = () => {
  // const navigation = useNavigation();

  // const handleSubmit = () => {
  //   navigation.navigate("Login");
  // };

  const showAlert = () => {
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
};

  return (
    <S.Container>
        <InputComponent label={"Nome"} type={"text"} placeholder={"Digite seu nome"}/>
        <InputComponent label={"E-mail"} type={"text"} placeholder={"Digite seu e-mail"}/>
        <InputComponent type="password" label={"Senha"} placeholder={"Digite sua senha"}/>
        <InputComponent type="password" label={"Confirmar senha"} placeholder={"Digite novamente sua senha"}/>
      <S.Button onPress={showAlert}>
        <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 19 }}>Cadastrar</Text>
      </S.Button>

    </S.Container>
  );
};

