import { Text} from 'react-native';
import Menu from './../../components/Menu';
import * as S from "./styles"
import Carrossel from './../../components/Carrossel';
import { Receitas } from './../receitas';
import { Estoque } from './../estoque';
import { Favoritos } from './../favoritos';
import { useState } from 'react';

export const Main = () => {
    const [page, setPage] = useState('Receitas')

    return (
        <S.Container>
            <Menu/>
            <Carrossel page={[page, setPage]}/>
            <S.screenView>
                {
                    page == 'Receitas' ? (
                        <Receitas/>
                    ) : page == 'Estoque' ? (
                        <Estoque/>
                    ) : (
                        <Favoritos/>
                    )
                }
            </S.screenView>
        </S.Container>
    )
}