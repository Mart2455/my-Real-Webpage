import Link from 'next/link'

import styles from '../../styles/skill.module.css'

export default function skill(){
    return(
       <>
       <head>
            <link rel="icon" href="m_icon4.png" />
            <title>Martin Miskovski</title>
            </head>

        <body className={styles.container}>
          
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>SkillSet</h1>
        </div>
        <div className={styles.buttonContainer}>
        <button  className={styles.ButtonStyle}>
        <Link href="/" className={styles.linkclass}>Home page  </Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/resume" className={styles.linkclass}>Resume</Link>
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
            <fieldset className={styles.textBox1}>
            <img src="C_icon.ico" alt="C++" className={styles.picture}/>
            
            </fieldset>
            <br />
            <fieldset className={styles.textBox1}>
            <img src="html_icon.ico" alt="html" className={styles.picture1}/>
            
            </fieldset>
            <br />
            <fieldset className={styles.textBox1}>
            <img src="javascript.ico" alt="Java" className={styles.picture1}/>
            </fieldset>
            <br />

            <fieldset className={styles.textBox1}>
            <img src="css.ico" alt="CSS" className={styles.picture1}/>
            </fieldset>
            </div>
                
            </body> 
            </>
    );
}