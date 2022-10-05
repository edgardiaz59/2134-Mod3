import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen1 from './screens/DetailsScreen1';
import DetailsScreen2 from './screens/DetailsScreen2';
import DetailsScreen3 from './screens/DetailsScreen3';

const  Stack = createNativeStackNavigator();

export default function App() {
  return (

        <NavigationContainer>
            <Text style={styles.homeText}>
            Welcome! This application displays some my 
            favorite 50's and 60's classic cars!
            </Text>
          <StatusBar style="auto" hidden="true" backgroundColor="#c9a6f5" /> 
              <Stack.Navigator>
                <Stack.Screen 
                  name="Home"
                  component={HomeScreen}
                  options={{ title: "Home" }}
                />
                <Stack.Screen 
                  name="Details1"
                  component={DetailsScreen1}
                  options={{ title: "1957 Chevrolet Bel Air" }}
                />
                <Stack.Screen 
                  name="Details2"
                  component={DetailsScreen2}
                  options={{ title: "1959 Cadillac DeVille" }}
                />
                <Stack.Screen 
                  name="Details3"
                  component={DetailsScreen3}
                  options={{ title: "1958 Chevrolet Impala" }}
                />
              </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create ({
  homeText: {
    fontSize: 30,
    backgroundColor: '#b483f1',
    paddingTop: 50,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#f8fad8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
