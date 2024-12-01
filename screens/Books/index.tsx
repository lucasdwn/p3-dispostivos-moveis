import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import booksData from '../../assets/books.json';
import { RootStackParamList } from 'App';
import { styles } from './style';
import { Book } from 'interfaces/IBook';

type BookListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Books'>;

type Props = {
    navigation: BookListScreenNavigationProp;
};

export default function BookListScreen({ navigation }: Props) {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setBooks(booksData);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.bookItem}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.author}</Text>
                        <Text>{item.publisher}</Text>
                        <Text>{item.year}</Text>
                    </View>
                )}
            />
        </View>
    );
}