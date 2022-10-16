import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import tw from 'twrnc';
import { Icon } from '@rneui/base';

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Torreon, Coahuila, MX",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Torreon, Coahuila, MX",
  },
]

const NavFavorites = () => {

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <Pressable 
          style={({ pressed }) => [
            tw`flex-row items-center p-5`,
            pressed && styles.pressed
          ]}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            color="white"
            type="ionicon"
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </Pressable>
      )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  }
})