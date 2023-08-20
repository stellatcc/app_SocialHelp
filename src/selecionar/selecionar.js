import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export function Tela2({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.identificar}>
          <Text style={styles.textIdentificar}>Quem é você?</Text>
          <View
            style={{
              position: 'absolute',
              width: 500,
              height: 120,
              top: 380,
              paddingLeft: 110,
              paddingTop: 10,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Tela1', { tipo: 'ong' });
              }}
            >
              <Image
                style={{ width: 75, height: 75, right: 20 }}
                source={require('@assets/img1.png')}
              />
              <Text style={styles.textButton1}>Ong</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Tela1', { tipo: 'voluntario' });
              }}
            >
              <Image
                style={{ width: 75, height: 75 }}
                source={require('@assets/img2.png')}
              />
              <Text style={styles.textButton2}>Voluntário</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Tela1', { tipo: 'necessitado' });
              }}
            >
              <Image
                style={{ width: 75, height: 75, left: 20 }}
                source={require('@assets/img3.png')}
              />
              <Text style={styles.textButton3}>Necessitado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E55934',
    alignItems: 'center',
    justifyContent: 'center',
  },

  identificar: {
    position: 'relative',
    width: 450,
    height: 850,
    backgroundColor: '#FA7921',
  },

  textIdentificar: {
    position: 'absolute',
    width: 350,
    height: 51,
    left: 90,
    top: 312,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 48,
    color: '#FAEDCD',
  },

  textButton1: {
    color: '#FAEDCD',
  },

  textButton2: {
    color: '#FAEDCD',
  },

  textButton3: {
    color: '#FAEDCD',
    left: 20,
  },
});
