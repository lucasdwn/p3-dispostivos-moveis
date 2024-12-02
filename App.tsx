import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/Home';
import BookListScreen from 'screens/Books';
import { Book } from 'interfaces/IBook';
import EditoraListScreen from 'screens/EditoraList';

export type RootStackParamList = {
  Home: undefined;
  Books: undefined;
  EditoraList: { editora: string }
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Books" component={BookListScreen} options={{ title: 'Lista de Livros' }} />
        <Stack.Screen name="EditoraList" component={EditoraListScreen} options={{
          title: 'Editora Lista',

        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
