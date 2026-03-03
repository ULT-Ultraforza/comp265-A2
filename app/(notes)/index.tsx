import { Link } from 'expo-router';
import { Text, View, Button } from 'react-native';

export default function NotesHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home / Notes Screen</Text>
      <Link href={{ pathname: '/(notes)/details', params: { id: '123', title: 'My First Note' } }} asChild>
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Details</Text>
      </Link>
      <Link href="/(notes)/archive" asChild style={{marginTop: 20}}>
        <Button title="Go to Archive" />
      </Link>
    </View>
  );
}