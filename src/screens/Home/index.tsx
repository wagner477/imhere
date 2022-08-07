import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export const Home = () => {
  const participants = [
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "João",
    "Pedro",
    "Jake",
    "Mike",
    "Jorel",
    "Café",
    "Renato",
    "Gilson",
    "Telma",
  ];

  const handlePaticipantAdd = () => {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Parcipante Existe",
        "Já existe um participante com esse nome"
      );
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};
