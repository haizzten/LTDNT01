
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button';

type ProductCardProps = {
    product: any,
    showModal: boolean,
    setShowModal: (value: boolean) => void,
}

const ProductCard: React.FC<ProductCardProps> = ({ product, setShowModal, showModal }) => {
    const { width, height } = Dimensions.get('window');

    return (
        <View style={[styles.cardProduct, { width, height }]}>
            <Image
                source={{ uri: product.imageURL }}
                style={styles.fullImage}
                resizeMode="contain"
            />
            <View style={styles.overlay}>
                <Text style={styles.text}>{product.title}</Text>
                <Text style={styles.text}>{product.price} $</Text>
                <Button styleButton={styles.btnClose} title="Close" onPress={() => setShowModal(false)} />
            </View>
        </View>
    );
};


export default ProductCard

const styles = StyleSheet.create({
    cardProduct: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    fullImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    overlay: {
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 20,
        borderRadius: 16,
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
    btnClose: {
        width: 100,
    },
});
