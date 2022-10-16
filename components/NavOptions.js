import { FlatList, Pressable, Text, View, StyleSheet, Image } from 'react-native'
import tw from 'twrnc';
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/navSlice';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
]

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-36`,
            pressed && styles.pressed
          ]}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image 
              style={{width: 100, height: 100, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center'}}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </Pressable>
      )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  }
})