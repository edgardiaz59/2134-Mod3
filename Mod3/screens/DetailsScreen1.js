import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

    const DetailsScreen1 = ({navigation}) => {

        const image57 = 'https://source.unsplash.com/sxkyrPOEA78/500x500';

        return (
            <View style={styles.container}>
                <Text> 1957 Chevrolet Bel Air Convertible</Text>
                    <Image source={{uri: image57 }} />

                    <Button
                    onPress={() => { navigation.navigate("Home") }}
                    title="Click here to back Home!"
                    color="#8423ff"
                    accessibilityLabel="shiny button!"
                    />
            </View>
        );

    }

export default DetailsScreen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b483f1",
        alignItems: "center",
        justifyContent: "center",
    },
});