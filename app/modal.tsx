import { Text, View, Button } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>Add New Note</Text>
      <Text>Type new note here...</Text>
      <Button title="Close" onPress={() => {}} />
    </View>
  );
}