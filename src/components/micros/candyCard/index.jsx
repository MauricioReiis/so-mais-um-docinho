import React, { useState } from 'react';
import * as S from './styles';
import { Text, TouchableOpacity } from 'react-native';

const CandyCard = ({ name, amount, price, ...props }) => {

  const [fav, setFav] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isRecipe, setIsRecipe] = useState(false)

  const handleCard = () => {
    setIsOpen(!isOpen)
  }
  const handleRecipe = () => {
    setIsRecipe(!isRecipe)
  }
  const handleFav = () => {
    setFav(!fav)
  }

  return (
    <S.Container onPress={handleCard}>
      {(isRecipe && isOpen) ? (
        <Text>PLACEHOLDER DE RECEITA</Text>
      ):(
      <S.Box>
        <S.TextField>
            <S.Name>{name}</S.Name>
            <S.Amount>{amount} porções</S.Amount>
            <S.Price>R${price} venda</S.Price>
        </S.TextField>
        <TouchableOpacity onPress={handleFav}><S.Icon fav={fav} source={require("../../../assets/star.png")}/></TouchableOpacity>
      </S.Box>
      )}
      {isOpen &&
       (<S.Settings>
          <S.ButtonBox>
            <S.Button onPress={handleRecipe}><S.IconButton source={require("../../../assets/eye.png")}/>Ver receita</S.Button>
            <S.Button><S.IconButton source={require("../../../assets/edit.png")}/>Editar</S.Button>
          </S.ButtonBox>
          <S.DeleteButton><S.IconButton source={require("../../../assets/trash.png")}/></S.DeleteButton>
        </S.Settings>)}
    </S.Container>
  );
};

export default CandyCard;