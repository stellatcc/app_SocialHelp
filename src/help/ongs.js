import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync();

export function HelpOngs({ navigation, route }) {
  return (
    <SafeAreaView style={styles.fundo}>
      <ScrollView>
        <Text style={styles.text}>
          Entre em contato com a pessoa pelo número fornecido! {"\n"}
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
            navigation.navigate("HelpOngs2", route.params);
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
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    color: "#000",
  },

  label: {
    position: "relative",
    marginBottom: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  value: {
    position: "relative",
    marginBottom: 25,
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
    width: 280,
    height: 77,
    marginTop: 40,
    marginLeft: 30,
    backgroundColor: "#FFFFE0",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textAjuda: {
    position: "relative",
    height: 49,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 48,
  },

  fundo: {
    backgroundColor: "#FDE74C",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 40,
  },
});
