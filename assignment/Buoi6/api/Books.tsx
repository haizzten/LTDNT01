import axios from "axios";
import { Book } from '../type/Book';

const baseUrl = 'https://686d13d814219674dcca5e24.mockapi.io/'

export async function getAllBooks(): Promise<Book[]> {
    let books: Book[] = []
    await axios.get<Book[]>(baseUrl + 'books')
        .then(response => {
            console.log("Get all Book response: " + JSON.stringify(response));
            books = response.data
        })
        .catch(error => {
            alert(error.message)
        }
        )
    return books
};

export async function deleteBook(id: string) {
    const response = await axios.delete(baseUrl + id)
}
