import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from './Card';

const CardList = ({items, navigation}) => {

    const renderCard = ({item}) => {
        return (
            <Card item={item}
                  navigation={navigation}  
            />
        );
    }

    if (items != null) 
    {
            return (
                <FlatList
                    data={items}
                    renderItem={renderCard}
                    keyExtractor={item => item._id}
            />
        );
    } else {
        return (
            <Text> 'Loading' </Text>
            );
    }
}

export default CardList;