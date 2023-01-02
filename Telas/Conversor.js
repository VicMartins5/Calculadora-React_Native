import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from "react-native";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker"
  
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Conversor = ({ navigation }) => {
  const [medidas, setMedidas] = useState("")
  const [resultadomedidas, setResultadomedidas] = useState("Medida 2")

  const [medaberta1, setMedaberta1] = useState(false);
  const [medselecionada1, setMedselecionada1] = useState();
  const [med1, setMed1] = useState([
    {label: "Milímetros", value: "mm"},
    {label: "Centímetros", value: "cm"},
    {label: "Metros", value: "m"},
    {label: "Quilômetros", value: "km"},
    {label: "Polegadas", value: "pol"},
    {label: "Pés", value: "pés"},
    {label: "Jardas", value: "yd"},
    {label: "Milhas", value: "mi"},
  ]);

  const [medaberta2, setMedaberta2] = useState(false);
  const [medselecionada2, setMedselecionada2] = useState();
  const [med2, setMed2] = useState([
    {label: "Milímetros", value: "mm"},
    {label: "Centímetros", value: "cm"},
    {label: "Metros", value: "m"},
    {label: "Quilômetros", value: "km"},
    {label: "Polegadas", value: "pol"},
    {label: "Pés", value: "pés"},
    {label: "Jardas", value: "yd"},
    {label: "Milhas", value: "mi"},
  ]);

  const [massa, setMassa] = useState("")
  const [resultadomassa, setResultadomassa] = useState("Massa 2")

  const [massaaberta1, setMassaaberta1] = useState(false);
  const [massaselecionada1, setMassaselecionada1] = useState();
  const [massa1, setMassa1] = useState([
    {label: "Miligrama", value: "mg"},
    {label: "Grama", value: "g"},
    {label: "Quilograma", value: "kg"},
    {label: "Tonelada", value: "t"},
    {label: "Onça", value: "oz"},
    {label: "Arroba", value: "@"},
  ]);

  const [massaaberta2, setMassaaberta2] = useState(false);
  const [massaselecionada2, setMassaselecionada2] = useState();
  const [massa2, setMassa2] = useState([
    {label: "Miligrama", value: "mg"},
    {label: "Grama", value: "g"},
    {label: "Quilograma", value: "kg"},
    {label: "Tonelada", value: "t"},
    {label: "Onça", value: "oz"},
    {label: "Arroba", value: "@"},
  ]);

  const [temperatura, setTemperatura] = useState("")
  const [resultadotemperatura, setResultadotemperatura] = useState("Temperatura 2")

  const [tempaberta1, setTempaberta1] = useState(false);
  const [tempselecionada1, setTempselecionada1] = useState();
  const [temps1, setTemps1] = useState([
    {label: "Celsius", value: "C"},
    {label: "Fahrenheit", value: "F"},
    {label: "Kelvin", value: "K"},
  ]);

  const [tempaberta2, setTempaberta2] = useState(false);
  const [tempselecionada2, setTempselecionada2] = useState();
  const [temps2, setTemps2] = useState([
    {label: "Celsius", value: "C"},
    {label: "Fahrenheit", value: "F"},
    {label: "Kelvin", value: "K"},
  ]);

  const ConvTemp = () => {
    if(tempselecionada1 == "" || tempselecionada2 == "") {
      alert("Escolha as temperaturas para conversão!")
    }

    else if(tempselecionada1 == tempselecionada2) {
      if (temperatura == "") {
        alert("Digite a temperatura a ser convertida!")
      }

      else {
        setResultadotemperatura(temperatura + " °" + tempselecionada1)
      }
    }

    else {
      if (temperatura == "") {
        alert("Digite a temperatura a ser convertida!")
      }

      if (tempselecionada1 == "C") {
        if (tempselecionada2 == "F") {
          var calc = (temperatura).replace(/,/g, ".")
          calc = parseFloat(calc)
          calc = ((calc * 1.8) + 32).toFixed(2)
          calc = calc.toString().replace(".", ",")
          setResultadotemperatura(calc + " °F")
        }

        else {
          var calc = (temperatura).replace(/,/g, ".")
          calc = parseFloat(calc)
          calc = (calc + 273.15).toFixed(2)
          calc = calc.toString().replace(".", ",")
          setResultadotemperatura(calc + " °K")
        }
      }

      else if (tempselecionada1 == "F") {
        if (tempselecionada2 == "C") {
          var calc = (temperatura).replace(/,/g, ".")
          calc = parseFloat(calc)
          calc = ((calc - 32) / 1.8).toFixed(2)
          calc = calc.toString().replace(".", ",")
          setResultadotemperatura(calc + " °C")
        }

        else {
          var calc = (temperatura).replace(/,/g, ".")
          calc = parseFloat(calc)
          calc = ((calc - 32) / 1.8 + 273.15).toFixed(2)
          calc = calc.toString().replace(".", ",")
          setResultadotemperatura(calc + " °K")
        }
      }

      else if (tempselecionada1 == "K") {
        if (tempselecionada2 == "C") {
          var calc = (temperatura).replace(/,/g, ".")
          calc = parseFloat(calc)
          calc = (calc - 273.15).toFixed(2)
          calc = calc.toString().replace(".", ",")
          setResultadotemperatura(calc + " °K")
        }

        else {
          var calc = (temperatura).replace(/,/g, ".")
          calc = parseFloat(calc)
          calc = (((calc - 273.15) * 1.8) + 32).toFixed(2)
          calc = calc.toString().replace(".", ",")
          setResultadotemperatura(calc + " °K")
        }
      }
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.conv_botoes_gp}>
            <TouchableOpacity onPress={() => navigation.navigate("Calculadora")} style={styles.conv_botoes}><Text style={styles.conv_botoes_texto}>➕</Text></TouchableOpacity>
        </View>

        <View style={styles.calculadora}>
          <View style={[styles.visor, styles.visor_medidas]}>

            <View style={styles.conv_grupo}>
              <Text style={styles.conv_titulo}>Medidas</Text>
              <View style={{width: "45%"}}>
                <DropDownPicker
                  open={medaberta1}
                  value={medselecionada1}
                  items={med1}
                  setOpen={setMedaberta1}
                  setValue={setMedselecionada1}
                  setItems={setMed1}
                  placeholder="Medida 1"
                  placeholderStyle={{fontSize: 15}}
                  style={styles.conv_dropdown}
                  textStyle={{color: "#ffa500", fontSize: 15, fontWeight: "500"}}
                  dropDownContainerStyle={{backgroundColor: "#222222", borderWidth: 0}}
                  listItemLabelStyle={{textAlign: "left"}}
                  showTickIcon={false}
                  arrowIconStyle={{tintColor: "#ffa500"}}
                />
              </View>

              <View style={{width: "45%"}}>
                <DropDownPicker
                  open={medaberta2}
                  value={medselecionada2}
                  items={med2}
                  setOpen={setMedaberta2}
                  setValue={setMedselecionada2}
                  setItems={setMed2}
                  placeholder="Medida 2"
                  placeholderStyle={{fontSize: 15}}
                  style={styles.conv_dropdown}
                  textStyle={{color: "#ffa500", fontSize: 15, fontWeight: "500"}}
                  dropDownContainerStyle={{backgroundColor: "#222222", borderWidth: 0}}
                  listItemLabelStyle={{textAlign: "left"}}
                  showTickIcon={false}
                  arrowIconStyle={{tintColor: "#ffa500"}}
                />
              </View>

              <TextInput
                style={styles.conv_input}
                value={temperatura}
                onChangeText={(text) => { setTemperatura(text)}}
                keyboardType={"numeric"}
                placeholder={"Medida 1"}
                placeholderTextColor={"#ffa500"}
              />

              <TouchableOpacity style={styles.conv_resultado} onPress={ConvTemp}><Text style={styles.conv_resultado_texto}>=</Text></TouchableOpacity>

              <Text style={styles.conv_input}>{resultadomedidas}</Text>
            </View>

            <View style={styles.conv_grupo}>
              <Text style={styles.conv_titulo}>Massa</Text>
              <View style={{width: "45%"}}>
                <DropDownPicker
                  open={massaaberta1}
                  value={massaselecionada1}
                  items={massa1}
                  setOpen={setMassaaberta1}
                  setValue={setMassaselecionada1}
                  setItems={setMassa1}
                  placeholder="Massa 1"
                  placeholderStyle={{fontSize: 15}}
                  style={styles.conv_dropdown}
                  textStyle={{color: "#ffa500", fontSize: 15, fontWeight: "500"}}
                  dropDownContainerStyle={{backgroundColor: "#222222", borderWidth: 0}}
                  listItemLabelStyle={{textAlign: "left"}}
                  showTickIcon={false}
                  arrowIconStyle={{tintColor: "#ffa500"}}
                />
              </View>

              <View style={{width: "45%"}}>
              <DropDownPicker
                  open={massaaberta2}
                  value={massaselecionada2}
                  items={massa2}
                  setOpen={setMassaaberta2}
                  setValue={setMassaselecionada2}
                  setItems={setMassa2}
                  placeholder="Massa 2"
                  placeholderStyle={{fontSize: 15}}
                  style={styles.conv_dropdown}
                  textStyle={{color: "#ffa500", fontSize: 15, fontWeight: "500"}}
                  dropDownContainerStyle={{backgroundColor: "#222222", borderWidth: 0}}
                  listItemLabelStyle={{textAlign: "left"}}
                  showTickIcon={false}
                  arrowIconStyle={{tintColor: "#ffa500"}}
                />
              </View>

              <TextInput
                style={styles.conv_input}
                value={temperatura}
                onChangeText={(text) => { setTemperatura(text)}}
                keyboardType={"numeric"}
                placeholder={"Massa 1"}
                placeholderTextColor={"#ffa500"}
              />

              <TouchableOpacity style={styles.conv_resultado} onPress={ConvTemp}><Text style={styles.conv_resultado_texto}>=</Text></TouchableOpacity>

              <Text style={styles.conv_input}>{resultadomassa}</Text>
            </View>

            <View style={styles.conv_grupo}>
              <Text style={styles.conv_titulo}>Temperatura</Text>
              <View style={{width: "45%"}}>
                <DropDownPicker
                  open={tempaberta1}
                  value={tempselecionada1}
                  items={temps1}
                  setOpen={setTempaberta1}
                  setValue={setTempselecionada1}
                  setItems={setTemps1}
                  placeholder="Temperatura 1"
                  placeholderStyle={{fontSize: 15}}
                  style={styles.conv_dropdown}
                  textStyle={{color: "#ffa500", fontSize: 15, fontWeight: "500"}}
                  dropDownContainerStyle={{backgroundColor: "#222222", borderWidth: 0}}
                  listItemLabelStyle={{textAlign: "left"}}
                  showTickIcon={false}
                  arrowIconStyle={{tintColor: "#ffa500"}}
                />
              </View>

              <View style={{width: "45%"}}>
                <DropDownPicker
                  open={tempaberta2}
                  value={tempselecionada2}
                  items={temps2}
                  setOpen={setTempaberta2}
                  setValue={setTempselecionada2}
                  setItems={setTemps2}
                  placeholder="Temperatura 2"
                  placeholderStyle={{fontSize: 15}}
                  style={styles.conv_dropdown}
                  textStyle={{color: "#ffa500", fontSize: 15, fontWeight: "500"}}
                  dropDownContainerStyle={{backgroundColor: "#222222", borderWidth: 0}}
                  listItemLabelStyle={{textAlign: "left"}}
                  showTickIcon={false}
                  arrowIconStyle={{tintColor: "#ffa500"}}
                />
              </View>

              <TextInput
                style={styles.conv_input}
                value={temperatura}
                onChangeText={(text) => { setTemperatura(text)}}
                keyboardType={"numeric"}
                placeholder={"Temperatura 1"}
                placeholderTextColor={"#ffa500"}
              />

              <TouchableOpacity style={styles.conv_resultado} onPress={ConvTemp}><Text style={styles.conv_resultado_texto}>=</Text></TouchableOpacity>

              <Text style={styles.conv_input}>{resultadotemperatura}</Text>
            </View>
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
  
    conv_botoes_gp: {
      zIndex: 1,
      position: "absolute",
      left: 10,
      top: 50
    },
  
    conv_botoes: {
      backgroundColor: "#383838",
      width: width * .1,
      height: width * .1,
      marginBottom: 10,
      justifyContent: "center",
      borderRadius: 50,
    },
  
    conv_botoes_texto: {
      color: "#ffa500",
      textAlign: "center",
      fontWeight: "500",
      fontSize: 20
    },

    conv_grupo: {
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
      flexWrap: "wrap",
      zIndex: 5
    },

    conv_titulo: {
      width: "100%",
      color: "#ffa500",
      fontSize: 30,
      textAlign: "center",
      marginBottom: 20
    },

    conv_dropdown: {
      marginBottom: 10,
      backgroundColor: "#222222",
      borderRadius: 0,
      borderWidth: 0,
      borderColor: "#383838",
      borderBottomWidth: 1,
      width: '100%'
    },

    conv_input: {
      width: "45%",
      height: height * .06,
      lineHeight: height * .06,
      color: "#ffa500",
      fontSize: 15,
      fontWeight: "500",
      paddingLeft: 10,
      borderColor: "#383838",
      borderBottomWidth: 1,
      marginBottom: 30
    },

    conv_resultado: {
      width: "5%",
      height: height * .06,
    },

    conv_resultado_texto: {
      color: "#ffa500",
      textAlign: "center",
      lineHeight: height * .06,
      fontSize: 25
    },

    calculadora: {
      flex: 1,
      marginTop: height * .04,
      justifyContent: "flex-start",
      flexDirection: "column"
    },
  
    visor: {
      height: height * .4538,
      width: width * .95,
      borderBottomColor: "#383838",
      borderBottomWidth: 2,
      justifyContent: "flex-start",
      marginHorizontal: "2.5%",
      paddingVertical: "5%",
      paddingHorizontal: "2.5%",
    },

    visor_medidas: {
      height: height * 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      borderBottomWidth: 0,
    },
  
    texto: {
      fontSize: 30,
      color: "#ffa500",
      fontWeight: "500",
      textAlign: "right",
      textAlignVertical: "bottom",
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

export default Conversor;