import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Details() {
  const { id, title } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text style={{ marginTop: 20 }}>
        Account ID: {useLocalSearchParams().id || 'none'}
        {'\n'}
        Title: {useLocalSearchParams().title || 'none'}
      </Text>
    </View>
  );
}