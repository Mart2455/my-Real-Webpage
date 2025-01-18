import Link from 'next/link'
import styles from '../../styles/resume.module.css';

export default function resume(){
    return(<>
        <head>
        <link rel="icon" href="m_icon4.png" />
        <title>Martin Miskovski</title>
        </head>
        <body className={styles.body}>
            
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>Resume</h1>
        </div>
        <div className={styles.buttonContainer}>
        <button  className={styles.ButtonStyle}>
        <Link href="/" className={styles.linkclass}>Home page  </Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/Skill" className={styles.linkclass}>Coding SkillSet</Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/contact" className={styles.linkclass}>Contact Me! </Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/about" className={styles.linkclass}>About Me </Link>
            </button>
            </div>
            
            <div className={styles.picContainer}>
            <img 
        src="/img/screenshot_resume.jpg" 
        alt="Resume" 
        className={styles.Picture} 
        style={{ maxWidth: "100%", height: "auto" }}  />
            </div>
                
                <h1 className={styles.title1}>Downloadable Version of My Resume</h1>
                <a href="/pdfs/Resume__.pdf" target="_blank" className={styles.linkclass1}>Click Here</a>
                </body>
                </>
    );
}