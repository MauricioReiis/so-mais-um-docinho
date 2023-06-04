import React from 'react';
import * as S from './styles';
import Input from './input';
import logo from '../../assets/logo-default.png';
import { Text } from 'react-native';

const Login = () => {
    return (
        <S.Container >
            <S.Wrapper>
                <S.Image source={logo}/>
                <Input type='text' placeholder='Digite seu e-mail' label='E-mail'/>
                <Input secureTextEntry placeholder='Digite sua senha' label='Senha'/>
                <S.WrapperSenha>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.5);' }}>Esqueceu sua senha?</Text>
                </S.WrapperSenha>
                <S.ButtonLogin>
                    <S.TextButton>Entrar</S.TextButton>
                </S.ButtonLogin>
                <Text style={{ color: 'rgba(0, 0, 0, 0.5);' }}>Cadastre-se</Text>
            </S.Wrapper>
        </S.Container>
    )
}

export default Login;