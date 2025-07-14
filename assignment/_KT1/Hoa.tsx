import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../App';

type RouteType = RouteProp<RootStackParamList, 'FlowerDetail'>;
type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
const Tab = createBottomTabNavigator();

export const imageMap: { [key: string]: any } = {
  "cuc_9.jpg": require('./assets/images/hoa/cuc_9.jpg'),
  "cuc_2.jpg": require('./assets/images/hoa/cuc_2.jpg'),
  "cuc_3.jpg": require('./assets/images/hoa/cuc_3.jpg'),
  "cuc_4.jpg": require('./assets/images/hoa/cuc_4.jpg'),
  "cuc_5.jpg": require('./assets/images/hoa/cuc_5.jpg'),
  "cuc_6.jpg": require('./assets/images/hoa/cuc_6.jpg'),
  "cuoi_1.jpg": require('./assets/images/hoa/cuoi_1.jpg'),
  "cuoi_2.jpg": require('./assets/images/hoa/cuoi_2.jpg'),
  "cuoi_3.jpg": require('./assets/images/hoa/cuoi_3.jpg'),
  "cuoi_4.jpg": require('./assets/images/hoa/cuoi_4.jpg'),
  "cuoi_5.jpg": require('./assets/images/hoa/cuoi_5.jpg'),
  "cuoi_6.jpg": require('./assets/images/hoa/cuoi_6.jpg'),
  "hong_1.jpg": require('./assets/images/hoa/hong_1.jpg'),
  "hong_2.jpg": require('./assets/images/hoa/hong_2.jpg'),
  "hong_3.jpg": require('./assets/images/hoa/hong_3.jpg'),
  "hong_4.jpg": require('./assets/images/hoa/hong_4.jpg'),
  "hong_5.jpg": require('./assets/images/hoa/hong_5.jpg'),
  "hong_7.jpg": require('./assets/images/hoa/hong_7.jpg'),
  "xuan_1.jpg": require('./assets/images/hoa/xuan_1.jpg'),
  "xuan_2.jpg": require('./assets/images/hoa/xuan_2.jpg'),
  "xuan_3.jpg": require('./assets/images/hoa/xuan_3.jpg'),
  "xuan_4.jpg": require('./assets/images/hoa/xuan_4.jpg'),
  "xuan_5.jpg": require('./assets/images/hoa/xuan_5.jpg'),
  "xuan_6.jpg": require('./assets/images/hoa/xuan_6.jpg'),
  "hong_13.jpg": require('./assets/images/hoa/hong_13.jpg'),
  "cuoi_9.jpg": require('./assets/images/hoa/cuoi_9.jpg'),
  "cuc_15.jpg": require('./assets/images/hoa/cuc_15.jpg'),
};

export default function FlowerDetailScreen() {
  const route = useRoute<RouteType>();
  const navigation = useNavigation<NavProp>();
  const { hoa, tenloai } = route.params;

  function HomeTab() {
    return (
      <Text onPress={() => navigation.navigate('Home')} style={styles.link}>Về trang các loại hoa</Text>
    );
  }

  function FlowerTab() {
    return (
      <View style={styles.container}>
        <Image source={imageMap[hoa.hinh]} style={styles.image} />
        <Text style={styles.text}>Tên loại hoa: "{tenloai}"</Text>
        <Text style={styles.text}>Mã hoa: {hoa.mahoa}</Text>
        <Text style={styles.text}>Tên hoa: "{hoa.tenhoa}"</Text>
        <Text style={styles.text}>Đơn giá: {hoa.giaban}</Text>
        <Text style={styles.text}>Mô tả: "{hoa.mota}"</Text>
        <Text onPress={() => navigation.navigate('Home')} style={styles.link}>Về trang các loại hoa</Text>
        <Text onPress={() => navigation.goBack()} style={styles.link}>Trở lại</Text>
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'person';
          else if (route.name === "Flower's Garden") iconName = 'cart';
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Flower's Garden" component={FlowerTab} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
  image: { width: 250, height: 250, marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
  link: { color: 'blue', textAlign: 'center', marginTop: 20 }
});
