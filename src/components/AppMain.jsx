import styles from "./AppMain.module.css"
import image1 from "../assets/img/buy-comics-digital-comics.png"
import image2 from "../assets/img/buy-comics-merchandise.png"
import image3 from "../assets/img/buy-comics-shop-locator.png"
import image4 from "../assets/img/buy-comics-subscriptions.png"
import image5 from "../assets/img/buy-dc-power-visa.svg"
import comics from "./comics"

function AppMain () {
  return (
    <main className={styles.main}>
        <section className={styles.sectiontop}>
         {comics.map ((comic) => {
          return (
          <div key = {comic.id} className= {styles.comiccard}>
            <div className={styles.comicImage}>
               <img src= {comic.thumb} alt={comic.title} />
            </div>
            <h3 className={styles.h3}>{comic.title}</h3>
            <p className={styles.p}>{comic.price}</p>
          </div>
          );
         })}
        </section>
      
      
      
        <section className={styles.sectionbottom}>
            <div className={styles.contenitore}>
                <img src={image1} alt="" style={{ width: "30px", height: "auto" }}/>
                <p>Digital comics</p>
            </div>

            <div className={styles.contenitore}>
                <img src={image2} alt="" style={{ width: "30px", height: "auto" }}/>
                <p>Dc Merchandaising</p>
            </div>
          

              <div className={styles.contenitore}>
                <img src={image3} alt="" style={{ width: "30px", height: "auto" }}/>
                <p>Subscrition</p>
            </div>

             <div className={styles.contenitore}>
                <img src={image4} alt="" style={{ width: "30px", height: "auto" }}/>
                <p>Shop Locator</p>
            </div>


             <div className={styles.contenitore}>
                <img src={image5} alt="" style={{ width: "30px" }}/>
                <p>Dc Power Visa</p>
            </div>
        </section>
    </main>
  )
}


export default AppMain;