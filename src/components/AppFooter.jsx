
import styles from "./AppFooter.module.css"

function AppFooter(){
    return (
        <footer className={styles.section}>
            <div className={styles.container}>
            <div className= {styles.col}>
                <p className={styles.p}>De comics</p>
                <ul className={styles.ul}>
                   <li>Caratteri</li>
                   <li>Comics</li>
                   <li>Movies</li>
                   <li>TV</li>
                   <li>Games</li>
                   <li>News</li>
                </ul>
                
                
                  <p className={styles.p}>Shop</p>
                <ul className={styles.ul}>
                    <li>Shop Dc</li>
                    <li>Shop Dc Collezzioni</li>
                </ul>
                </div>
                
            
                <div className={styles.col}>
                <p className={styles.p}>DC</p>
                <ul className={styles.ul}>
                    <li>Tema Dc Usa</li>
                    <li>Privacy</li>
                    <li>Ratings</li>
                    <li>Contact us</li>
                    <li>Ad choices</li>
                    <li>Advartesing</li>
                </ul>
                </div>
               
           
            </div>
        </footer>
    )
}

export default AppFooter