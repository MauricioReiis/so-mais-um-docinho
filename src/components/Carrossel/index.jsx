import * as S from './styles';
import { ScrollView } from 'react-native';

const Carrossel = ({page}) => {
    const [nav, setNav] = page
    
    return (    
        <S.Container>    
            <ScrollView 
                horizontal
                contentContainerStyle={{
                    width: `140%`,
                    justifyContent: 'space-around'
                }}
                showsHorizontalScrollIndicator = {false}
            >
                <S.ContainerText id='Receitas' onPress = {() => setNav('Receitas')}>Receitas</S.ContainerText>
                <S.ContainerText id='Estoque' onPress = {(e) => setNav('Estoque')} >Estoque</S.ContainerText>
                <S.ContainerText id='Favoritos' onPress = {() => setNav('Favoritos')} >Favoritos</S.ContainerText>
            </ScrollView>
        </S.Container> 
    )
}

export default Carrossel