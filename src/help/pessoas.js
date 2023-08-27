import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync();

export function HelpPessoas({ navigation, route }) {
  return (
    <SafeAreaView style={styles.fundo}>
      <ScrollView>
        <Text style={styles.text}>
          Entre em contato com a pessoa pelo número fornecido!
        </Text>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{route.params.nome}</Text>
        <Text style={styles.label}>Número de contato:</Text>
        <Text style={styles.value}>{route.params.contato}</Text>
        <Text style={styles.label}>Possui familia?</Text>
        <Text style={styles.label}>Quantidade de{"\n"} integrantes:</Text>
        <Text style={styles.value}>{route.params.qtdIntegrantes}</Text>
        <Text style={styles.label}>Forma de ajuda:</Text>
        <TouchableOpacity
          style={styles.botaoAjuda}
          onPress={() => {
            navigation.navigate("HelpPessoas3", route.params);
          }}
        >
          <Text style={styles.textAjuda}>Ajudei!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    left: 42,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    color: "#000",
  },
  label: {
    position: "relative",
    marginBottom: 5,
    marginLeft: 45,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 60,
    color: "#000",
  },
  value: {
    position: "relative",
    marginBottom: 25,
    marginLeft: 45,
    width: 300,
    backgroundColor: "white",
    fontStyle: "normal",
    borderRadius: 25,
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  botaoAjuda: {
    position: "relative",
    width: 295,
    height: 77,
    left: 46,
    marginTop: 30,
    backgroundColor: "#FFFFE0",
    borderRadius: 30,
  },

  textAjuda: {
    position: "relative",
    width: 235,
    height: 49,
    left: 70,
    top: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 48,
  },

  fundo: {
    backgroundColor: "#9BC53D",
    flex: 1,
  },
});
