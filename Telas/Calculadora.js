import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from "react-native";
import { useState } from "react";
  
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Calculadora = ({ navigation }) => {
    const [operacao, setOperacao] = useState("")
    const [resultado, setResultado] = useState("")
    var resul, paraber, parfech

    const AddOper = (valor) => {
        if (operacao.length >= 72) {
            setResultado("Excedido valor máximo")
        }

        else if (valor == "()") {
            paraber = operacao.split("(").length - 1
            parfech = operacao.split(")").length - 1
  
            if (paraber == parfech) {
                setOperacao(operacao + "(")
            }
    
            else {
                setOperacao(operacao + ")")
            }
        }
    
        else {
            setOperacao(operacao + valor);
        }
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
        if (operacao.length >= 72) {
            setResultado("Excedido valor máximo")
        }
  
        else {
            try {
                resul = operacao.toString().replace(/,/g, ".").replace(/×/g, "*").replace(/÷/g, "/")
                resul = eval(resul)
                resul = resul.toString().replace(".", ",")
                setResultado(resul)
            }

            catch {
                setResultado("Erro de sintaxe")
            }
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.calculadora}>
        <View style={styles.botoes_conv_gp}>
            <TouchableOpacity onPress={() => navigation.navigate("Medidas")} style={styles.botoes_conv}><Text style={styles.botoes_conv_texto}>📏</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Peso")} style={styles.botoes_conv}><Text style={styles.botoes_conv_texto}>⚖️</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Temperatura")} style={styles.botoes_conv}><Text style={styles.botoes_conv_texto}>🌡</Text></TouchableOpacity>
        </View>

        <View style={styles.visor}>
            <TextInput
            style={styles.texto}
            value={operacao}
            onChangeText={(text) => setOperacao(text)}
            multiline={true}
            numberOfLines={4}
            keyboardType={"number-pad"}
            maxLength={72}
            />
            <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.textoresultado}
            selectable={true}
            >{resultado}</Text>
        </View>

        <View style={styles.botoes_grupo}>
            <TouchableOpacity onPress={LimparOper} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp]}>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={ApagarOper} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp]}>⌫</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => AddOper("()")} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp]}>( )</Text></TouchableOpacity>
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

            <TouchableOpacity onPress={() => AddOper("0")} style={[styles.botoes, {width: (height * .7) * .335, borderRadius: 30}]}><Text style={[styles.botoes_texto]}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => AddOper(",")} style={styles.botoes}><Text style={[styles.botoes_texto, styles.botoes_texto_esp, styles.botoes_texto_simb]}>,</Text></TouchableOpacity>
            <TouchableOpacity onPress={Result} style={[styles.botoes, styles.botoes_result]}><Text style={[styles.botoes_texto, styles.botoes_texto_result]}>=</Text></TouchableOpacity>
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222222",
      alignItems: "center",
      justifyContent: "center",
    },
  
    botoes_conv_gp: {
        zIndex: 1,
      position: "absolute",
      left: 10,
      top: 0
    },
  
    botoes_conv: {
      backgroundColor: "#383838",
      width: width * .1,
      height: width * .1,
      marginBottom: 10,
      justifyContent: "center",
      borderRadius: 50,
    },
  
    botoes_conv_texto: {
      color: "#ffa500",
      textAlign: "center",
      fontWeight: "500",
      fontSize: 20
    },
  
    calculadora: {
      flex: 1,
      marginTop: height * .1,
      justifyContent: "flex-start",
      flexDirection: "column"
    },
  
    visor: {
      height: height * .335,
      width: width * .95,
      borderBottomColor: "#383838",
      borderBottomWidth: 2,
      justifyContent: "flex-end",
      marginHorizontal: "2.5%",
      paddingVertical: "5%",
      paddingHorizontal: "2.5%",
    },
  
    texto: {
      fontSize: 30,
      color: "#ffa500",
      fontWeight: "500",
      textAlign: "right",
      textAlignVertical: "bottom"
    },
  
    textoresultado: {
      fontSize: 45,
      color: "white",
      fontWeight: "500",
      textAlign: "right",
    },
  
    botoes_grupo: {
      width: width,
      height: height * .665,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: "5%",
      paddingHorizontal: "5%",
      flexWrap: "wrap",
    },
  
    botoes: {
      width: (height * .7) * .15,
      backgroundColor: "#383838",
      borderRadius: 100,
      height: (height * .7) * .15,
      marginBottom: 10,
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

export default Calculadora;