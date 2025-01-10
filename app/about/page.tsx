import Link from 'next/link';

import styles from '../../styles/about.me.module.css';

export default function AboutMe(){
    return (
        <body>
            
        
            <div className={styles.mainBox}>
            <h1 className={styles.title}>About Me</h1>
            
            </div>
           <fieldset className={styles.box1}>
            <div className={styles.buttonContainer}>
            <button className={styles.ButtonStyle}>
            <Link href="/" className={styles.linkclass}>Home page  </Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/Skill" className={styles.linkclass}>Coding SkillSet</Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/Skill" className={styles.linkclass}>Contact Me! </Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/resume" className={styles.linkclass}>Resume </Link>
            </button>
            </div>
            </fieldset>
            <fieldset className={styles.textBox}>
            <p className={styles.Para}>Hi! My name is Martin Miskovski, and I am currently a student at the University of Concordia in Computer Engineering. I am currently in my Second year with plenty of internships to come!</p>
            </fieldset>
            <br />
            <div className={styles.picContainer}>
            <fieldset className={styles.textBox1}>
                
            <img src="/img/Computer_Engineering.jpg" alt="Chip Picture" className={styles.Picture}/>
            <br />
            <h1 className={styles.Title1}>Hardware and Computers</h1>
            <br />
            <p className={styles.Para1}>Since I was a kid, I was always facinated by computers and always interested to understand how computers work in general. Making the decision to go into computer engineering was never hard since it regrouped every aspect of computers.</p>
            </fieldset>

            <br />

            <fieldset className={styles.textBox1}>
            <img src="/img/physics.jpg" alt="Physics Formulas" className={styles.Picture}/>
            <br />
            <h1 className={styles.Title1}>The World Of Physics</h1>
            <br />
            <p className={styles.Para1}>Same as with computers, I always liked do understand the world that surrounds me. Learning the fundamentals of physics made it possible for me to explain things that many people never even care to question. </p>
            </fieldset>
            </div>
            </body>
    );
}