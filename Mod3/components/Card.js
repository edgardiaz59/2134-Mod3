import React from 'react';
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Card = ({item}) => {

  const navigation = useNavigation()

    function goToScreen (id) {
      if (id == 1) {
        navigation.navigate('Details1')
      }
      if (id == 2) {
        navigation.navigate('Details2')
      }
      if (id == 3) {
        navigation.navigate('Details3')
      }
    } 

    return (
            <View style={styles.container}>
                <View style={[styles.card]}>
                    <Button
                        onPress={() => goToScreen(item._id)}
                        title="Click here to view!"
                        color="#8423ff"
                        accessibilityLabel="shiny button!"
                        />
                    <Image
                        style={styles.cardImage}
                        source={{ uri: item.image}}
                    />
                    <View style={styles.cardContent} >
                        <View style={styles.cardHeader} >
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                        </View>
                    </View>
                </View>
            </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b483f1',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15
    },
    card: {
      borderWidth: 0,
      minHeight: 300,
      shadowColor: '#000000',
      shadowOffset: {
        wdith: 2,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 12,
      marginTop: 0,
      backgroundColor: '#FFFFFF',
      marginRight: 0,
      alignSelf: 'stretch'
    },
    cardImage: {
      flex: 1,
      height: 150,
      borderRadius: 3
    },
    cardContent: {
      paddingVertical: 15,
      paddingHorizontal: 15
    },
    title: {
      fontSize: 28
    },
    desc: {
      fontSize: 15
    },
    cardHeader: {
      paddingVertical: 5
  
    }

});