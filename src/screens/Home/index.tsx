import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export const Home = () => {
  const handlePaticipantAdd = () => {
    console.log("Você adicionou um participante");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName} key="1">
        Nome do evento
      </Text>

      <Text style={styles.eventDate} key="2">
        Sexta, 4 de novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  );
};
