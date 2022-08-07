import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface iParticipant {
  name: string;
  onRemove: () => void;
}

export const Participant = ({ name, onRemove }: iParticipant): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
};
