import "./App.css";
import Navbar from "./components/navbar";
import { BooksList } from "./components/bookList";
import EditAddBookInfo from "./components/editAddBookInfo";
import Footer from "./components/footer";
import { useMemo, useState } from "react";

function App() {
	const [books, setBooks] = useState([
		{
			id: 1,
			title: "Happy Place",
			author: "Emily Henry",
			isbn: "9783060311354",
			price: 13.00,
			publicationDate: new Date("2023-04-25"),
			
		},
		{
			id: 2,
			title: "Funny Story",
			author: "Emily Henry",
			isbn: "9780312195267",
			price: 10.99,
			publicationDate: new Date("2024-04-28"),
     
		},
	]);

	const [selectedBookId, setSelectedBookId] = useState(null);
	const selectedBook = useMemo(
		() => books.find((x) => x.id === selectedBookId),
		[books, selectedBookId],
	);

	return (
		<div>
			<Navbar />

			<BooksList
				books={books}
				onDelete={(id) => {
					setSelectedBookId((state) => {
						if (state === id) {
							return null;
						}
						if (state > id) {
							return state - 1;
						}
						return state;
					});

					setBooks((state) =>
						state
							.filter((x) => x.id !== id)
							.map((b) => ({ ...b, id: b.id > id ? b.id - 1 : b.id })),
					);
				}}
				onSelect={(book) => {
					console.log("on select", book.id);
					setSelectedBookId(book.id);
				}}
			/>

			<EditAddBookInfo
				selectedBook={selectedBook}
				onBookCreated={(book) => {
					if (selectedBook) {
						setBooks((state) =>
							state.map((x) =>
								x.id === selectedBook.id ? { ...x, ...book } : x,
							),
						);
						setSelectedBookId(null);
						return;
					}

					setBooks((state) => [...state, { id: state.length + 1, ...book }]);
				}}
			/>

			<Footer />
		</div>
	);
}

export default App;
