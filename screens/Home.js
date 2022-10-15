import { View, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { setOrigin, setDestination } from '../redux/navSlice';

const Home = () => {
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.nav.origin);
  const destination = useSelector((state) => state.nav.destination);

  console.log(origin)
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: "https://1000marcas.net/wp-content/uploads/2020/10/Uber-Logo.png"
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }));
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default Home