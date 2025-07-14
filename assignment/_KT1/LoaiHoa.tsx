import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import data from './assets/loaihoa.json';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../App';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export const imageMap: { [key: string]: any } = {
  "Hoa-Cuc": require('./assets/images/hoa/cuc_2.jpg'),
  "Hoa-Cuoi": require('./assets/images/hoa/cuoi_2.jpg'),
  "Hoa-Hong": require('./assets/images/hoa/hong_3.jpg'),
  "Hoa-Xuan": require('./assets/images/hoa/xuan_4.jpg'),
};

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <View>
      <Text style={styles.title}>Danh mục loại hoa</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.maloai.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FlowerList', { loaiId: item.maloai, loaiTen: item.tenloai })} style={styles.container}>
            <Text style={styles.name}>{item.tenloai}</Text>
            <Image source={imageMap[item.maloai]} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { textAlign: 'center', fontSize: 20, color: 'red', marginVertical: 10 },
  name: { textAlign: 'center', fontWeight: 'bold', fontSize: 16, marginTop: 10 },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
  image: { width: 250, height: 250, resizeMode: 'cover', marginVertical: 10 }
});
