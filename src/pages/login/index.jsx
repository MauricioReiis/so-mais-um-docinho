import React from "react";
import * as S from "./styles"
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Alert } from 'react-native';
import { InputComponent, Logo } from "../../components/micros";
import LogoPassword from '../../assets/password.png'
import LogoEmail from '../../assets/email.png'

export const Login = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Cadastre-se");
  };

  const showAlert = () => {
    console.log('Sucesso', 'Login realizado com sucesso!');
    navigation.navigate('Main')
};

  return (
   <S.Container>
      <Logo top={"-50px"}/>
      <InputComponent 
        label={"E-mail"} 
        placeholder={"Digite seu e-mail"}
        src={LogoEmail}/>
      <InputComponent 
        label={"Senha"} 
        type="password" 
        placeholder={"Digite sua senha"}
        src={LogoPassword}/>
      <S.Button onPress={showAlert}>
      <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 19 }}>Entrar</Text>
    </S.Button>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Cadastre-se</Text>
    </TouchableOpacity>
   </S.Container>
  );
};

