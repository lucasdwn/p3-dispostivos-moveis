import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'App';
import booksData from '../../assets/books.json';
import { Book } from 'interfaces/IBook';
import { styles } from './styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [oldestBook, setOldestBook] = useState<Book | null>(null);
  const [newestBook, setNewestBook] = useState<Book | null>(null);

  useEffect(() => {

    setTotalBooks(booksData.length);

    const uniqueCourses = new Set(booksData.map((book) => book.course));
    setTotalCourses(uniqueCourses.size);

    const oldest = booksData.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest
    );
    setOldestBook(oldest);

    const newest = booksData.reduce((newest, book) =>
      book.year > newest.year ? book : newest
    );
    setNewestBook(newest);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bibliografia</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Total de disciplinas: {totalCourses}</Text>
        <Text style={styles.text}>Total de livros: {totalBooks}</Text>
        {oldestBook && (
          <Text style={styles.text}>
            Livro mais velho: {oldestBook.title} ({oldestBook.year})
          </Text>
        )}
        {newestBook && (
          <Text style={styles.text}>
            Livro mais novo: {newestBook.title} ({newestBook.year})
          </Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Books')}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}