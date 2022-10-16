import { Pressable, View } from 'react-native'
import tw from 'twrnc';
import MapComponent from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <Pressable 
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-10 left-8 z-50 p-2 roundedfull shadow-lg`}
      >
        <Icon name="menu" />
      </Pressable>
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