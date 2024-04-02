import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pagina Inicial!</Text>
      <Link style={styles.btn} href={"/inicio"}>Contatos</Link>

    <StatusBar style="auto" />
    </View>
  );
}
