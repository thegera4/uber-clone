import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning user!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            debounce={400}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
              }));
              navigation.navigate('RideOptionsCard');
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
          />
        </View>
        <NavFavorites/>
      </View>

      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <Pressable
          style={({pressed}) =>[
            tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`,
            pressed && toInputBoxStyles.pressed
          ]}
          onPress={() => navigation.navigate('RideOptionsCard')}
        >
          <Icon
            name="car"
            type="font-awesome"
            color="white"
            size={16}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>[
            tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`,
            pressed && toInputBoxStyles.pressed
          ]}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  pressed:{
    opacity: 0.5,
  }
})