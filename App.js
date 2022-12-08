import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useState } from "react";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

export default function App() {
  const [operacao, setOperacao] = useState("")
  const [resultado, setResultado] = useState("")
  const AddOper = (valor) => {
    setOperacao(operacao + valor);
  }

  const LimparOper = () => {
    setOperacao("");
    setResultado("");
  }

  const ApagarOper = () => {
    setOperacao(operacao.slice(0, -1))
    setResultado("");
  }

  const Result = () => {
    var resul = eval(operacao)
    setResultado(resul)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.calculadora}>
        <View
          style={styles.visor}>
          <TextInput
            style={styles.texto}
            value={operacao}
            onChangeText={(text) => setOperacao(text)}
            keyboardType={"numeric"}
          />
          <Text style={[styles.texto, {marginTop: 20, color: "white"}]}>{resultado}</Text>
        </View>

        <View style={styles.botoes_grupo}>
          <TouchableOpacity onPress={LimparOper} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp]}>C</Text></TouchableOpacity>
          <TouchableOpacity onPress={ApagarOper} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp]}>⌫</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp]}>( )</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper(" ÷ ")} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp, styles.botoes_texto_simb]}>÷</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => AddOper("9")} style={styles.botoes}><Text style={styles.botoes_texto}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper("8")} style={styles.botoes}><Text style={styles.botoes_texto}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper("7")} style={styles.botoes}><Text style={styles.botoes_texto}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper(" × ")} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp, styles.botoes_texto_simb]}>×</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => AddOper("6")} style={styles.botoes}><Text style={styles.botoes_texto}>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper("5")} style={styles.botoes}><Text style={styles.botoes_texto}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper("4")} style={styles.botoes}><Text style={styles.botoes_texto}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper(" - ")} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp, styles.botoes_texto_simb]}>-</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => AddOper("3")} style={styles.botoes}><Text style={styles.botoes_texto}>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper("2")} style={styles.botoes}><Text style={styles.botoes_texto}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper("1")} style={styles.botoes}><Text style={styles.botoes_texto}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper(" + ")} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp, styles.botoes_texto_simb]}>+</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => AddOper("0")} style={[styles.botoes, {    width: (height * .7) * .295,}]}><Text style={[styles.botoes_texto]}>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => AddOper(",")} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp, styles.botoes_texto_simb]}>,</Text></TouchableOpacity>
          <TouchableOpacity onPress={Result} style={[styles.botoes, styles.botoes_result]}><Text style={[styles.botoes_texto, styles.botoes_texto_result]}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  calculadora: {
    flex: 1,
    marginTop: height * .1,
    justifyContent: "flex-start",
    flexDirection: "column"
  },

  visor: {
    height: height * .4,
    width: width * .86,
    borderBottomColor: "#323232",
    borderBottomWidth: 2,
    marginHorizontal: "7%"
  },

  texto: {
    fontSize: 30,
    color: "#ffa500",
    fontWeight: "500",
    textAlign: "right",
  },

  botoes_grupo: {
    height: height * .6,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "5%",
    paddingHorizontal: "10%",
    flexWrap: "wrap",
  },

  botoes: {
    width: (height * .7) * .13,
    backgroundColor: "#383838",
    borderRadius: 100,
    height: (height * .7) * .13,
    marginBottom: 15,
    justifyContent: "center"
  },

  botoes_texto: {
    fontSize: 25,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },

  botoes_texto_simb: {
    fontSize: 35,
  },

  botoes_texto_esp: {
    color: "#ffa500"
  },

  botoes_result: {
    backgroundColor: "#ffa500",
    fontSize: 35,
  },

  botoes_texto_result: {
    color: "#222222",
    fontSize: 35,
  }
});