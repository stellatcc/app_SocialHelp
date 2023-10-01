import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export function HelpOngs2({ navigation, route }) {
  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>
          Obrigada! Você ajudou {"\n"} {route.params.nome}
        </Text>
        <Image
          style={{ width: 250, height: 250, top: 30 }}
          source={require("@assets/img13.png")}
        ></Image>
        <TouchableOpacity
          style={styles.proximo}
          onPress={() => {
            navigation.navigate("HelpOngs", route.params);
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
    fontSize: 30,
    lineHeight: 48,
  },
});
