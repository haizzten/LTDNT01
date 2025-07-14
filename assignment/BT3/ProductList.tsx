//Screen1.ts
import { FlatList, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { products } from './Products';



const ProductList = () => {

    const [product, setProduct] = useState('');
    const [showModal, setShowModal] = useState(false);

    const ItemView = ({ item }: any) => {
        return (
            <Pressable onPress={() => getItem(item)} style={[styles.item]}>
                <View style={styles.boxIcon}>
                    <Image source={require('../../assets/icon-cart.png')} style={styles.iconCart} />
                </View>
                <Image style={styles.imgProduct} source={{ uri: item.imageURL }} />
                <Text style={styles.textItem} >{item.title}</Text>
                <Text style={styles.textPrice} >{item.price}</Text>
            </Pressable>
        )
    }

    const ItemSeparatorComponent = () => {
        return (
            <View style={{
                height: 0.5,
                width: 100,
                backgroundColor: 'gray',
            }} />
        )
    }

    const getItem = (item: any) => {
        setProduct(item);
        setShowModal(!showModal);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
                ItemSeparatorComponent={ItemSeparatorComponent}
                style={{ padding: 12 }}
            />
            <Modal animationType='slide' transparent={false} visible={showModal}>
                <Pressable style={styles.modal} onPress={() => setShowModal(!showModal)}>
                    <ProductCard showModal product={product} setShowModal={(value: boolean) => setShowModal(value)} />
                </Pressable>
            </Modal>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    item: {
        maxWidth: '100%',
        width: '100%',
        marginBottom: 15,
        borderRadius: 12,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        flexGrow: 1,
    },
    boxIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 40,
        height: 40,
        borderRadius: 90,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    iconCart: {
        width: 24,
        height: 24,
    },
    imgProduct: {
        width: "100%",
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    textItem: {
        width: '80%',
        fontSize: 14,
        textAlign: 'left',
        color: 'black',
        marginBottom: 10,
    },
    textPrice: {
        width: '80%',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#333',
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
