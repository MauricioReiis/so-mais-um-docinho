import * as S from './styles';
import profile from '../../assets/profile.jpeg'
import menuImage from '../../assets/Menu.png'
import { Image, Text } from 'react-native'

const Menu = () => {
    return (
        <S.Container>
            <Image source={menuImage}></Image>
            <S.ProfileContainer>
                <Text>Jane Doe</Text>
                <S.ProfileImage>
                    <Image source={profile} style={{width: '100%', height: '100%'}}/>
                </S.ProfileImage>
            </S.ProfileContainer>
        </S.Container>
    )
}

export default Menu;