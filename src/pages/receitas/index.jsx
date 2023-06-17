import { ScrollView } from 'react-native';
import CandyCard from '../../components/micros/candyCard';

export const Receitas = () => {
    return(
        <ScrollView>
            <CandyCard name='teste' amount={2} price={2}/>
            <CandyCard name='teste' amount={2} price={2}/>
            <CandyCard name='teste' amount={2} price={2}/>
            <CandyCard name='teste' amount={2} price={2}/>
            <CandyCard name='teste' amount={2} price={2}/>
            <CandyCard name='teste' amount={2} price={2}/>
            <CandyCard name='teste' amount={2} price={2}/>
        </ScrollView>
    )
}