import { useState } from "react";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

export const InputComponent = ({
  type,
  placeholder,
  onChangeText,
  value,
  label,
  src,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={type === 'password' ? true : false}
        {...props}
      ></S.Input>
        <TouchableOpacity onPress={toggleShowPassword}>
          <S.Icon source={src} />
        </TouchableOpacity>
    </S.Container>
  );
};

