import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

    const DetailsScreen2 = ({navigation}) => {

        const image59 = 'https://source.unsplash.com/EQL3w-D4Ftc/500x500';

        return (
            <View style={styles.container}>
                <Text> 1959 Cadillac Coupe DeVille </Text>
                    <Image source={{uri: image59 }} />

                    <Button
                    onPress={() => { navigation.navigate("Home") }}
                    title="Click here to back Home!"
                    color="#8423ff"
                    accessibilityLabel="shiny button!"
                    />
            </View>
        );

    }

export default DetailsScreen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b483f1",
        alignItems: "center",
        justifyContent: "center",
    },
});