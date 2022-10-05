import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

    const DetailsScreen3 = ({navigation}) => {

        const image58 = 'https://source.unsplash.com/Bgv_dXJvgMU/500x500';

        return (
            <View style={styles.container}>
                <Text> 1958 Chevrolet Impala Convertible </Text>
                    <Image source={{uri: image58 }} />

                    <Button
                    onPress={() => { navigation.navigate("Home") }}
                    title="Click here to back Home!"
                    color="#8423ff"
                    accessibilityLabel="shiny button!"
                    />
            </View>
        );

    }

export default DetailsScreen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b483f1",
        alignItems: "center",
        justifyContent: "center",
    },
});