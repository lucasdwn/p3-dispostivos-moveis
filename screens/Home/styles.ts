import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    button: {
        width: '50%',
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
