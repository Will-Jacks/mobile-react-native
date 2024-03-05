import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoReact from './image/img-react.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testando pra ver se a imagem renderiza</Text>
      <Image source={logoReact} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200
  }
});
