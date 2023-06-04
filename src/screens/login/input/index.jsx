import React from 'react';
import * as S from './styles';

const Input = ({ label, placeholder, type, ...props }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...props} type={type} placeholder={placeholder} />
    </S.Container>
  );
};

export default Input;