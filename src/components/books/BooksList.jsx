import Book from "../book/Book";
import styles from './BooksList.module.css';

const BooksList = () => {
    return (
        <div className={styles.booksList}>
           
            <Book/>
            <Book/>
            <Book/>
          
        </div>
    )
}

export default BooksList
