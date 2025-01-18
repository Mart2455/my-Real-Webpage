
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
    return (
<>
        <head>
        <link rel="icon" href="m_icon4.png" />
        <title>Martin Miskovski</title>
        </head>
        
       <body className={styles.body}>
       
       
        <div >
            <div className={styles.headerSection}>
            <h1 className={styles.homepage}>
                Martin Miskovski 
            </h1>
            </div>
            
            <div className={styles.LinkSection}>
                
            <button className={styles.ButtonStyle}><Link href="/about" className={styles.Links}>About me</Link></button>
        <br />
        <button className={styles.ButtonStyle}><Link href= "/contact" className={styles.Links}>Contact Me!</Link></button>
        <br />
        <button className={styles.ButtonStyle}><Link href="/Skill" className={styles.Links}>Coding SkillSet</Link></button>
        <br />
        <button className={styles.ButtonStyle}><Link href="/resume" className={styles.Links}>Resume</Link></button>
        
        </div>
        
            <div className={styles.FutureSection}>
                <br />
                <h1 className={styles.SectionFutureHeader}>Experience</h1>
            <div className={styles.ImageWithText}>
            <fieldset className={styles.textBox}>
                <img src="/img/Software.jpg" alt="Software Future" className={styles.futureImage}/>
                
                    <h1 className={styles.title5}>Projects</h1>
                <p className={styles.imagetext}>As of today, I did many small projects to help me learn many aspects of coding like web programming, debugging and object oriented programming. The webpage you are currently using is my biggest project yet. It made me learn CSS, html, javascript and next.js.</p>
                </fieldset>
            </div>
            <br />
            <div className={styles.ImageWithText}>
            <fieldset className={styles.textBox}>
            <img src="/img/coding.jpg" alt="Coding" className={styles.futureImage} />
            
                <h1 className={styles.title5}>hackathons</h1>
            <p className={styles.imagetext}>To help myself grow faster in the world of coding, I will be participating in a lot of hackathons. This will help me other aspects of coding and grow my resume for future opportunities.</p>
            </fieldset>
        </div>
        <br />
        <div className={styles.ImageWithText}>
        <fieldset className={styles.textBox}>
            <img src="/img/internships.jpg" alt="Intern" className={styles.futureImage} />  
          
            <h1 className={styles.title5}>Career Experience</h1>                                   
            <p className={styles.imagetext}>To  build my resume, I chose to go into COOP. This will make me get a lot more work experience like internships and help me know the working environment after finishing my degree. My first internship will be in FALL 2025.</p>
            </fieldset> 
        </div>  
            </div>
        </div>
        </body>
        </>
    );
}