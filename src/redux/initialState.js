export const initialState = {
    books: [
        {
            id: 1,
            title: 'Grokking Algorithms',
            author: 'Aditya Bhargava',
            pages: 300,
            image: 'https://habrastorage.org/files/9c2/836/cdb/9c2836cdbc5d4ba5a84e4908dd8caf6c.jpg'
        },
        {
            id: 2,
            title: 'HTML and CSS',
            author: 'Dzhon Dakett',
            pages: 540,
            image: 'https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX395_BO1,204,203,200_.jpg'
        }
    ],
    book: null,
    selectedBooks: []
}