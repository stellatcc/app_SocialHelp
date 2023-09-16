import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export function HelpPessoas3({ navigation, route }) {
  function Help() {
    if (route.params.nomeOng) {
      return <Text>{route.params.nomeOng}</Text>;
    } else {
      return <Text>{route.params.nome}</Text>;
    }
  }
  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>
          Obrigada! Você {"\n"}ajudou {""}
          {Help()}
        </Text>
        <Image
          style={{ width: 250, height: 250, top: 30 }}
          source={require("@assets/img15.png")}
        ></Image>
        <TouchableOpacity
          style={styles.proximo}
          onPress={() => {
            navigation.navigate("HelpPessoas2");
          }}
        >
          <Image
            style={{ width: 50, height: 50, top: 55, right: 150 }}
            source={require("@assets/img14.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#FAEDCD",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    left: 19,
    top: 20,
    fontStyle: "normal",
    fontSize: 40,
    lineHeight: 48,
  },
});
