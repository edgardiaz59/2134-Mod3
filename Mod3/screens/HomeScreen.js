import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import CardList from '../components/CardList';
import { cards } from '../data/cards';

    const HomeScreen = ({navigation}) => {
        const [text, onChangeText] = useState("");
        return (
            <View style={styles.container}>
                    <Text> Below are some of my favorite Classic Cars! Enjoy! </Text>
                    <CardList items={ cards } />

            </View>
        );

    }

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: "#dfc7ff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});