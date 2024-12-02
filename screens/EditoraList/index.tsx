import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import booksData from '../../assets/books.json';
import { RootStackParamList } from 'App';
import { styles } from './style';
import { Book } from 'interfaces/IBook';
import { RouteProp } from '@react-navigation/native';

type EditoraListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditoraList'>;
type EditoraListScreenRouteProp = RouteProp<RootStackParamList, 'EditoraList'>;

type Props = {
    navigation: EditoraListScreenNavigationProp;
    route: EditoraListScreenRouteProp
};

export default function EditoraListScreen({ navigation, route }: Props) {
    const { editora } = route.params;
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const booksEditora = booksData.filter((i) => i.publisher === editora)

        const uniqueBooks = new Map(
            booksEditora.map(i => [i.title, i])
        )
        setBooks(
            [...uniqueBooks.values()]
        );
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