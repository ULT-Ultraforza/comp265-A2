import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotesHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home / Notes Screen</Text>
      <Link href={{ pathname: '/(notes)/details', params: { id: '123', title: 'My First Note' } }}>
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Details</Text>
      </Link>
    </View>
  );
}