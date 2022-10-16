import { StyleSheet, Text, SafeAreaView, Pressable, View, Image } from 'react-native'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';

const data=[
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
]

const RideOptionsCard = () => {

  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  console.log(selected);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <Pressable
          style={({pressed}) =>[
            tw`absolute top-3 left-5 z-50 p-3 rounded-full`,
            pressed && styles.pressed
          ]}
          onPress={() => navigation.navigate('NavigateCard')}
          >
          <Icon
            name="chevron-left"
            type="fontawesome"
          />
          </Pressable>
        <Text style={tw`text-center py-5 text-xl`}>Pick a ride: </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item: {id, title, multiplier, image}}) => (
          <Pressable
            style={({pressed}) =>[
              tw`flex-row justify-between items-center px-10 
              ${id === selected?.id && 'bg-gray-200'}`,
              pressed && styles.pressed
            ]}
            onPress={() => setSelected({id, title})}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </Pressable>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <View style={tw`flex-row justify-between items-center px-10`}>
          <Text style={tw`text-xl`}>Total</Text>
          <Text style={tw`text-xl`}>$99</Text>
        </View>
        <Pressable
          style={({pressed}) =>[
            tw`bg-black py-3 m-3 rounded-full ${!selected && 'bg-gray-300'}`,
            pressed && styles.pressed
          ]}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </Pressable>
      </View>


    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({
  pressed:{
    opacity: 0.5,
  }
})