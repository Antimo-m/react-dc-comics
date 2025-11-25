import imgLogo from "../assets/img/dc-logo.png";
import styles from "./AppHeader.module.css";

function AppHeader () {
   return (
    <header className={styles.Header}>
        <img src={imgLogo} alt="" />
        <nav>
            <ul className={styles.ul}>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
             <li><a href="">Link</a></li>
            </ul>
        </nav>
    </header>
   )
}

export default AppHeader