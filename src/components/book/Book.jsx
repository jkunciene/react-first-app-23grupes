import styles from "./Book.module.css";


const Book = () => {
    return (
        <div className={styles.oneBook}>
            <img className={styles.oneBookImg} src="https://thumb.knygos-static.lt/dXG6HGy8udsBzXe7Cw-maFIdl4U=/fit-in/0x800/filters:cwatermark(static/wm.png,500,75,30)/images/books/2611006/1627392435_Piktulis_150RGB.jpg" alt="knyga"/>
            <h2>Pavadinimas "Piktulis"</h2>
            <p>Aprilkind, Barbara van den Speulhof</p>
            <p>Kaina: 20Eur</p>
        </div>
    )
}

export default Book
