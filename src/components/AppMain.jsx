import styles from "./AppMain.module.css"
import image1 from "../assets/img/buy-comics-digital-comics.png"
import image2 from "../assets/img/buy-comics-merchandise.png"
import image3 from "../assets/img/buy-comics-shop-locator.png"
import image4 from "../assets/img/buy-comics-subscriptions.png"
import image5 from "../assets/img/buy-dc-power-visa.svg"
import comics from "./comics"
import ComicCard from "./comicCard"

function AppMain() {
  return (
    <main className={styles.main}>
      <section className={styles.sectiontop}>
        {comics.map((comic) => (
          <ComicCard 
          key={comic.id} 
          comic={comic}
           />
        ))}
      </section>

      <section className={styles.sectionbottom}>
        <div className={styles.contenitore}>
          <img src={image1} alt="" style={{ width: "30px", height: "auto" }} />
          <p>Digital comics</p>
        </div>
        <div className={styles.contenitore}>
          <img src={image2} alt="" style={{ width: "30px", height: "auto" }} />
          <p>Dc Merchandaising</p>
        </div>
        <div className={styles.contenitore}>
          <img src={image3} alt="" style={{ width: "30px", height: "auto" }} />
          <p>Subscrition</p>
        </div>
        <div className={styles.contenitore}>
          <img src={image4} alt="" style={{ width: "30px", height: "auto" }} />
          <p>Shop Locator</p>
        </div>
        <div className={styles.contenitore}>
          <img src={image5} alt="" style={{ width: "30px" }} />
          <p>Dc Power Visa</p>
        </div>
      </section>
    </main>
  );
}



export default AppMain