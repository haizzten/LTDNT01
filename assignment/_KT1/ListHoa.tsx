import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import data from './assets/hoa.json';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RouteType = RouteProp<RootStackParamList, 'FlowerList'>;
type NavProp = NativeStackNavigationProp<RootStackParamList, 'FlowerList'>;

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



function FlowerListScreen() {
  const route = useRoute<RouteType>();
  const navigation = useNavigation<NavProp>();
  const { loaiId, loaiTen } = route.params;

  const flowerList = data.filter((h) => h.maloai === loaiId);

  return (
    <View>
      <Text style={styles.title}>Mã hoa: {loaiId}</Text>
      <Text style={styles.title}>Loại hoa: {loaiTen}</Text>

      <FlatList
        data={flowerList}
        keyExtractor={(item) => item.mahoa.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FlowerDetail', { hoa: item, tenloai: loaiTen })} style={styles.container}>
            <Text style={styles.name}>{item.tenhoa}</Text>
            <Image source={imageMap[item.hinh]} style={styles.image} />
            <Text style={{ textAlign: 'center' }}>Giá bán: {item.giaban}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { textAlign: 'center', color: 'red', fontSize: 18, marginTop: 10 },
  name: { textAlign: 'center', fontWeight: 'bold', fontSize: 16, marginTop: 10 },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
  image: { width: 250, height: 250, resizeMode: 'cover', marginVertical: 10 }
});
export default FlowerListScreen