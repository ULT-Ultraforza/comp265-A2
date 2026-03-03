import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Notes' }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ title: 'Profile' }} 
      />
    </Tabs>
  );
}