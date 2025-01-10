
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
    return (
        
       <body>
        <title>Martin Miskovski</title>
       
        <div >
        
            <div className={styles.headerSection}>
            <h1 className={styles.homepage}>
                Martin Miskovski 
            </h1>
            </div>
            <fieldset className={styles.textBox2}>
            <div className={styles.LinkSection}>
                
            <button className={styles.ButtonStyle}><Link href="/about" className={styles.Links}>About me</Link></button>
        <br />
        <button className={styles.ButtonStyle}><Link href= "/contact" className={styles.Links}>Contact Me!</Link></button>
        <br />
        <button className={styles.ButtonStyle}><Link href="/Skill" className={styles.Links}>Coding SkillSet</Link></button>
        <br />
        <button className={styles.ButtonStyle}><Link href="/resume" className={styles.Links}>Resume</Link></button>
        
        </div>
        </fieldset>
            <div className={styles.FutureSection}>
                <br />
                <h1 className={styles.SectionFutureHeader}>My future Self</h1>
            <div className={styles.ImageWithText}>
            <fieldset className={styles.textBox}>
                <img src="/img/Software.jpg" alt="Software Future" className={styles.futureImage}/>
                
                    <h1>Software Future</h1>
                <p className={styles.imagetext}>With the growing development of AI in our world, I hope that new technologies will help solodify our society all together.</p>
                </fieldset>
            </div>
            <br />
            <div className={styles.ImageWithText}>
            <fieldset className={styles.textBox}>
            <img src="/img/coding.jpg" alt="Coding" className={styles.futureImage} />
            
                <h1>Coding Future</h1>
            <p className={styles.imagetext}>When it comes to coding, I will be learning other languages like Java, Python And C. Those languages will assure my understanding of coding globally.</p>
            </fieldset>
        </div>
        <br />
        <div className={styles.ImageWithText}>
        <fieldset className={styles.textBox}>
            <img src="/img/Adventure.jpg" alt="Exploration" className={styles.futureImage} />  
          
            <h1>Future Plans</h1>                                   
            <p className={styles.imagetext}>In the near future, I hope that I will be able to travel around the world especially in Europeean countries. I would love to visit Germany, Italy and England for all the activities and beautiful monuments they offer.</p>
            </fieldset> 
        </div>  
            </div>
        </div>
        </body>
    );
}