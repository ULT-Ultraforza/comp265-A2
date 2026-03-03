import { Link } from 'expo-router';
import { Text, View, Button, TextInput, Switch, ScrollView, Image, StyleSheet } from 'react-native';

export default function NotesHome() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home / Notes Screen</Text>

        <Image
          source={{ uri: 'https://picsum.photos/200' }} // random placeholder, or use local asset
          style={styles.image}
        />

        <Link href={{ pathname: '/(notes)/details', params: { id: '123', title: 'My First Note' } }} asChild>
          <Text style={styles.link}>Go to Details</Text>
        </Link>

        <Link href={{ pathname: '/(notes)/archive', params: { filter: 'completed', count: '5' } }} asChild>
          <Button title="Go to Archive (Completed)" />
        </Link>

        <Link href="/(notes)/new" asChild>
          <Button title="Create New Note" />
        </Link>

        <Link href={{ pathname: '/modal', params: { noteTitle: 'Quick Note Idea', urgent: 'true' } }} asChild>
          <Button title="Open Add Note Modal" />
        </Link>

        <TextInput
          placeholder="Quick note title..."
          style={styles.input}
        />

        <View style={styles.switchRow}>
          <Text>Enable notifications?</Text>
          <Switch value={false} onValueChange={() => { }} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0FFFF' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 20, borderRadius: 10 },
  link: { color: 'blue', marginVertical: 10, fontSize: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, width: '80%', marginVertical: 20, borderRadius: 5 },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', marginTop: 10 },
});