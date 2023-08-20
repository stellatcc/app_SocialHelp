import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Tela1 } from 'src/login/login.js';
import { Tela2 } from 'src/selecionar/selecionar.js';
import { TelaOng } from '@telasOngs/telaOng/ongs.js';
import { TelaOng2 } from '@telasOngs/telaOng2/ongs.js';
import { TelaOng3 } from '@telasOngs/telaOng3/ongs.js';
import { TelaOng4 } from '@telasOngs/telaOng4/ongs.js';
import { TelaOng5 } from '@telasOngs/telaOng5/ongs.js';
import { TelaOng6 } from '@telasOngs/telaOng6/ongs.js';
import { TelaPessoas } from '@telasPessoas/telaPessoas/pessoas.js';
import { TelaPessoas2 } from '@telasPessoas/telaPessoas2/pessoas.js';
import { TelaPessoas3 } from '@telasPessoas/telaPessoas3/pessoas.js';
import { TelaPessoas4 } from '@telasPessoas/telaPessoas4/pessoas.js';
import { TelaPessoas5 } from '@telasPessoas/telaPessoas5/pessoas.js';
import { TelaPessoas6 } from '@telasPessoas/telaPessoas6/pessoas.js';
import { TelaPessoas7 } from '@telasPessoas/telaPessoas7/pessoas.js';
import { TelaNecessitados } from '@telasNecessitados/telaNecessitados/necessitados.js';
import { TelaNecessitados2 } from '@telasNecessitados/telaNecessitados2/necessitados.js';
import { TelaNecessitados3 } from '@telasNecessitados/telaNecessitados3/necessitados.js';
import { TelaNecessitados4 } from '@telasNecessitados/telaNecessitados4/necessitados.js';
import { TelaNecessitados5 } from '@telasNecessitados/telaNecessitados5/necessitados.js';
import { TelaNecessitados6 } from '@telasNecessitados/telaNecessitados6/necessitados.js';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  /* const [fontsLoaded] = useFonts({
     'Fredoka-One': require('./assets/fonts/FredokaOne-Regular.ttf'),
   });
 
   const onLayoutRootView = useCallback(async () => {
     if (fontsLoaded) {
       await SplashScreen.hideAsync();
     }
   }, [fontsLoaded]);
 
   if (!fontsLoaded) {
     return null;
   }
 
   onLayoutRootView();*/

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitle: '' }}
        initialRouteName='Tela2'
      >
        <Stack.Screen name='Tela1' component={Tela1} />
        <Stack.Screen name='Tela2' component={Tela2} />
        <Stack.Screen name='TelaOng' component={TelaOng} />
        <Stack.Screen name='TelaOng2' component={TelaOng2} />
        <Stack.Screen name='TelaOng3' component={TelaOng3} />
        <Stack.Screen name='TelaOng4' component={TelaOng4} />
        <Stack.Screen name='TelaOng5' component={TelaOng5} />
        <Stack.Screen name='TelaOng6' component={TelaOng6} />
        <Stack.Screen name='TelaPessoas' component={TelaPessoas} />
        <Stack.Screen name='TelaPessoas2' component={TelaPessoas2} />
        <Stack.Screen name='TelaPessoas3' component={TelaPessoas3} />
        <Stack.Screen name='TelaPessoas4' component={TelaPessoas4} />
        <Stack.Screen name='TelaPessoas5' component={TelaPessoas5} />
        <Stack.Screen name='TelaPessoas6' component={TelaPessoas6} />
        <Stack.Screen name='TelaPessoas7' component={TelaPessoas7} />
        <Stack.Screen name='TelaNecessitados' component={TelaNecessitados} />
        <Stack.Screen name='TelaNecessitados2' component={TelaNecessitados2} />
        <Stack.Screen name='TelaNecessitados3' component={TelaNecessitados3} />
        <Stack.Screen name='TelaNecessitados4' component={TelaNecessitados4} />
        <Stack.Screen name='TelaNecessitados5' component={TelaNecessitados5} />
        <Stack.Screen name='TelaNecessitados6' component={TelaNecessitados6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
