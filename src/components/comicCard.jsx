import styles from "./AppMain.module.css"

function ComicCard({ comic }) {
    return (
        <div className={styles.comiccard}>
            <div className={styles.comicImage}>
             <img src={comic.thumb} alt={comic.title} /> 
            </div>
             <h3 className={styles.h3}>{comic.title}</h3> 
             <p className={styles.p}>{comic.price }</p> 
       </div>
    )}
export default ComicCard
