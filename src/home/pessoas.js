import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { url } from "@banco/url.js";

export function HomePessoas({ navigation, route }) {
  const [data, setData] = useState([]);
  const mostrarDados = async () => {
    const response = await axios.get(url + "/SocialHelp/selectPessoas.php");
    setData(response.data.result);
  };
  mostrarDados();

  function cardsPessoa(value, index, array) {
    let style = styles.cards;
    if (index != 0) {
      style = styles.cardInvisible;
    }
    return (
      <TouchableOpacity
        key={index}
        style={style}
        onPress={() => {
          navigation.navigate("HelpPessoas", value);
        }}
      >
        <Image
          style={{ width: 80, height: 80, top: 30, left: 30 }}
          source={require("@assets/img4.png")}
        />
        <Text style={styles.nome}>{value.nome}</Text>
      </TouchableOpacity>
    );
  }

  const [data2, setData2] = useState([]);
  const mostrarDados2 = async () => {
    const response = await axios.get(url + "/SocialHelp/selectPessoas2.php");
    setData2(response.data.result);
  };
  mostrarDados2();

  function cardsOng(value, index, array) {
    let style = styles.cards;
    if (index != 0) {
      style = styles.cardInvisible;
    }
    return (
      <TouchableOpacity
        key={index}
        style={style}
        onPress={() => {
          navigation.navigate("HelpPessoas2", value);
        }}
      >
        <Image
          style={{ width: 80, height: 80, top: 30, left: 30 }}
          source={require("@assets/img4.png")}
        />
        <Text style={styles.nome}>{value.nome}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.fundo}>
      <>
        <View style={{ flexDirection: "row", height: 0 }}>
          <Text style={styles.text}>Ajude quem precisa!</Text>
        </View>

        <ScrollView contentContainerStyle={styles.boxWhite}>
          <Text style={styles.text1}>Necessitado</Text>
          {data.map(cardsPessoa)}
          <Text style={styles.text2}>Ong's</Text>
          {data2.map(cardsOng)}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomePessoas", route.params);
            }}
          >
            <Image
              style={{ width: 35, height: 35, top: 65, left: 100 }}
              source={require("@assets/img7.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProfilePessoas", route.params);
            }}
          >
            <Image
              style={{ width: 35, height: 35, left: 250, top: 30 }}
              source={require("@assets/img8.png")}
            />
          </TouchableOpacity>
        </ScrollView>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    width: 322,
    height: 96,
    left: 47,
    top: 8,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 48,
    color: "#000",
  },

  fundo: {
    backgroundColor: "#9BC53D",
    flex: 1,
  },

  boxWhite: {
    position: "absolute",
    width: 411,
    height: 780,
    left: 0,
    top: 100,
    backgroundColor: "#FAEDCD",
    borderRadius: 29,
  },

  cards: {
    position: "relative",
    width: 283,
    height: 176,
    left: 47,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#9BC53D",
    borderRadius: 20,
  },

  cardInvisible: {
    display: "none",
  },

  nome: {
    position: "relative",
    width: 136,
    height: 78,
    left: 120,
    bottom: 15,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },

  text1: {
    position: "relative",
    left: 35,
    top: 15,
    fontStyle: "normal",
    fontSize: 25,
    color: "#000",
  },

  text2: {
    position: "relative",
    left: 35,
    top: 15,
    fontStyle: "normal",
    fontSize: 25,
    color: "#000",
  },
});
