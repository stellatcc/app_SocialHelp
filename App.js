import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "src/login/login.js";
import { Selecionar } from "src/selecionar/selecionar.js";
import { HomeNecessitados, HomePessoas, HomeOngs } from "src/home";
import { ProfileOngs, ProfilePessoas } from "src/profile";
import {
  HelpNecessitados,
  HelpNecessitados2,
  HelpOngs,
  HelpOngs2,
  HelpPessoas,
  HelpPessoas2,
  HelpPessoas3,
} from "src/help";

import {
  CadNecessitados,
  CadNecessitados2,
  CadOngs,
  CadOngs2,
  CadPessoas,
  CadPessoas2,
} from "src/cad";
import { ProfileNecessitados } from "src/profile/necessitados";

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
        screenOptions={{ headerTitle: "" }}
        initialRouteName='selecionar'
      >
        {/*Cadastro */}
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='selecionar' component={Selecionar} />
        <Stack.Screen name='CadOngs' component={CadOngs} />
        <Stack.Screen name='CadOng2' component={CadOngs2} />
        <Stack.Screen name='CadNecessitados' component={CadNecessitados} />
        <Stack.Screen name='CadNecessitados2' component={CadNecessitados2} />
        <Stack.Screen name='CadPessoas' component={CadPessoas} />
        <Stack.Screen name='CadPessoas2' component={CadPessoas2} />
        {/*Help */}
        <Stack.Screen name='HelpNecessitados' component={HelpNecessitados} />
        <Stack.Screen name='HelpNecessitados2' component={HelpNecessitados2} />
        <Stack.Screen name='HelpOngs' component={HelpOngs} />
        <Stack.Screen name='HelpOngs2' component={HelpOngs2} />
        <Stack.Screen name='HelpPessoas' component={HelpPessoas} />
        <Stack.Screen name='HelpPessoas2' component={HelpPessoas2} />
        <Stack.Screen name='HelpPessoas3' component={HelpPessoas3} />
        {/*Home */}
        <Stack.Screen name='HomeOngs' component={HomeOngs} />
        <Stack.Screen name='HomePessoas' component={HomePessoas} />
        <Stack.Screen name='HomeNecessitados' component={HomeNecessitados} />
        {/*Profile */}
        <Stack.Screen
          name='ProfileNecessitadosf'
          component={ProfileNecessitados}
        />
        <Stack.Screen name='ProfileOngs' component={ProfileOngs} />
        <Stack.Screen name='ProfilePessoas' component={ProfilePessoas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
