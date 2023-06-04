import { StatusBar } from 'expo-status-bar';
import styles from './src/styles/global';
import Screnns from './src/screens';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Screnns />
    </View>
  );
}