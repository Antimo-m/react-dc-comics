import styles from "./AppHeader.module.css";

function AppHeader () {
   return (
    <header className={styles.Header}>
        <img src="/src/img/dc-logo.png" alt="" />
        <nav>
            <ul className={styles.ul}>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
              <a href=""> <li>link</li></a>
            </ul>
        </nav>
    </header>
   )
}

export default AppHeader