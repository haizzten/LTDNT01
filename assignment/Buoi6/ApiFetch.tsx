import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Modal, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import { FC, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { Book } from './type/Book';
import { getAllBooks } from './api/Books';


const BookList = () => {
	const [listBook, setListBook] = useState<Book[]>([])
	const [bookModalVisible, setBookModalVisible] = useState(false);
	const [confirmModalVisible, setConfirmModalVisible] = useState(false)
	const [editedBook, setEditedBook] = useState<Book>()



	const getBook = (item: Book) => {
		alert('id: ' + item.id + ' book name: ' + item.bookName)
	}

	const BookItem: FC<{ item: Book }> = ({ item }) => {
		return (
			<TouchableOpacity
				style={styles.card}
				onPress={() => getBook(item)}
			>
				<Image source={{ uri: item.image }} style={styles.cardImage} />
				<View style={styles.textInfo}>
					<Text style={{ fontSize: 16 }}>{item.bookName}</Text>
					<Text style={{ color: '#2563EB' }}>{item.price}</Text>
					<Text>{item.description}</Text>
				</View>
				<View style={styles.iconGroup}>
					<TouchableOpacity style={styles.iconButton}>
						<Ionicons style={styles.iconTrash} name="trash-outline" size={20} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconButton}
						onPress={() => {
							setEditedBook(item)
							setBookModalVisible(true)
						}}
					>
						<Ionicons style={styles.iconPen} name="pencil-outline" size={20} />
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		)
	}

	const ItemSeparatorView = () => {
		return (
			<View style={styles.separator} />
		)
	}

	return (
		<SafeAreaView style={styles.container} >
			<FlatList
				// style={{ flexGrow: 0, borderRadius: 8, borderWidth: 1, borderColor: '#2563EB' }} //debug
				data={listBook}
				ItemSeparatorComponent={ItemSeparatorView}
				renderItem={({ item }) => <BookItem item={item} />}
				keyExtractor={(item, index) => index.toString()}
			></FlatList>
			<Button
				title="Get Books from Api"

				onPress={() => getAllBooks().then(books => setListBook(books))}
			/>

			<Modal
				visible={bookModalVisible}
				animationType="slide"
				transparent
				onRequestClose={() => setBookModalVisible(false)}
			>
				<View style={styles.overlay}>
					<View style={styles.modal}>
						{/* Close Button */}
						<TouchableOpacity
							style={styles.modalClose}
							onPress={() => setBookModalVisible(false)}
						>
							<Text style={{ color: '#FFF', fontSize: 10 }}>❌</Text>
						</TouchableOpacity>

						<Text style={styles.modalTitle}>Book Details</Text>
						<ScrollView>
							<TextInput
								style={styles.input}
								value={editedBook?.bookName}
							/>
							<TextInput
								style={styles.input}
								value={editedBook?.author}
							/>
							<TextInput
								style={styles.input}
								keyboardType="numeric"
								value={editedBook?.price}
							/>
							<TextInput
								style={styles.input}
								value={editedBook?.image}
							/>
							<TextInput
								style={[styles.input, styles.textArea]}
								value={editedBook?.description}
								multiline
							/>
						</ScrollView>

						<TouchableOpacity style={styles.saveBtn}>
							<Text style={styles.saveText}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

		</SafeAreaView>)
}



const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		backgroundColor: '#fff',
		justifyContent: 'space-evenly',
		paddingHorizontal: 10,
		// borderRadius: 8, borderWidth: 10, borderColor: '#bdeb25ff', flexGrow: 1 // debug UI
	},
	card: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		marginHorizontal: 16,
		marginVertical: 8,
		borderRadius: 8,
		padding: 12,
		elevation: 3,
		// borderWidth: 1, borderColor: '#c433b1ff', flexGrow: 1 // debug UI
	},
	cardImage: {
		width: 100,
		height: 100,
		// borderRadius: 8, borderWidth: 1, borderColor: '#2563EB', // debug UI
	},
	textInfo: {
		flexShrink: 1,
		marginHorizontal: 8,
		// borderRadius: 8, borderWidth: 1, borderColor: '#2563EB', // debug UI
	},
	iconGroup: {
		// flexGrow: 1,
		flexShrink: 0,
		justifyContent: 'space-evenly',
		// borderRadius: 8, borderWidth: 1, borderColor: '#2563EB', // debug UI
	},
	iconButton: {
		// borderRadius: 8, borderWidth: 1, borderColor: '#2563EB', // debug UI
		padding: 5
	},
	iconTrash: {
		color: '#c7002bff',
	},
	iconPen: {
		color: '#c77d1bff',
	},
	separator: {
		height: 5,
		width: '100%',
	},

	// modal

	actionGroup: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	actionBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 4,
		paddingHorizontal: 12,
		marginRight: 8,
		borderRadius: 999,
		backgroundColor: '#E5E7EB',
	},
	actionText: {
		color: '#1F2937',
		fontSize: 14,
	},
	deleteBtn: {
		backgroundColor: '#F87171',
	},

	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		width: '90%',
		maxHeight: '90%',
		backgroundColor: '#FFF',
		borderRadius: 8,
		paddingTop: 24,
		paddingBottom: 16,
		paddingHorizontal: 16,
		position: 'relative',
	},
	modalClose: {
		position: 'absolute',
		top: -12,
		left: -12,
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: '#ffe0e0ff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalTitle: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 16,
	},
	input: {
		width: '100%',
		padding: 10,
		borderRadius: 8,
		backgroundColor: '#E5E7EB',
		marginBottom: 12,
		fontSize: 14,
	},
	textArea: {
		height: 80,
		textAlignVertical: 'top',
	},
	saveBtn: {
		backgroundColor: '#2563EB',
		paddingVertical: 12,
		borderRadius: 8,
		marginTop: 8,
	},
	saveText: {
		color: '#FFF',
		fontSize: 16,
		textAlign: 'center',
	},
});

export default BookList