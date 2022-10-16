import { StyleSheet, View } from 'react-native'
import tw from 'twrnc';
import MapComponent from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const Map = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2 bg-gray-200`}>
        <MapComponent />
      </View>
      <View style={tw`h-1/2 bg-black`}>
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard" 
            component={NavigateCard}
            options={{
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="RideOptionsCard" 
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }} 
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})