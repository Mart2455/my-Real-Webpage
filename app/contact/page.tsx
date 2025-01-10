'use client';
import Link from 'next/link'
import { useState } from 'react'

import styles from '../../styles/contact.me.module.css';

export default function contactMe(){
    const [name,setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = { name, email, message };

        try {
            const response = await fetch('/api/contact-api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus('Message sent successfully!');
            } else {
                setStatus('Failed to send message. Try again later.');
            }
        } catch (error) {
            setStatus('Error sending message. Try again later.');
        }
    };

    return (
        <body>
            
        
            <h1 className={styles.Title}>Contact Me!</h1>

            <hr className={styles.line} />

           <div className={styles.buttonContainer}>
            <button className={styles.ButtonStyle}>
            <Link href="/" className={styles.linkclass}>Home page</Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/Skill" className={styles.linkclass}>Coding SkillSet</Link>
            </button>
            <br />
            <button className={styles.ButtonStyle}>
            <Link href="/about" className={styles.linkclass}>About me</Link>
            </button>
            <button className={styles.ButtonStyle}>
            <Link href="/resume" className={styles.linkclass}>Resume</Link>
            </button>
            </div>
            <hr className={styles.line} />
            <div className={styles.centerContainer}>
            <fieldset className={styles.textBox}>
                <legend className={styles.legend1}>Send Me a Message</legend>
                <h1>email: martin_m1717@icloud.com</h1>
                <h1>Phone Number: 514-793-1392</h1>
                <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="Name" className={styles.label}>Name:</label>
                    <input type="text" name="Name" id="Name" placeholder="Your Name" autoComplete="on" value={name} onChange={(e) => setName(e.target.value)} required className={styles.input} />
                </p>
                <p>
                    <label htmlFor="Mail" className={styles.label}>Mail:</label>
                    <input type="email" id="Mail" name="Mail" placeholder="Your Email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} required className={styles.input}/>
                </p>
                <p>
                    <label htmlFor="Message" className={styles.label}>Your Message:</label>
                    <br />
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Type your message here" value={message} 
                        onChange={(e) => setMessage(e.target.value)}  className={styles.input}></textarea>
                </p>
                <button type="submit"  className={styles.ButtonStyle}>Send Message</button>
                </form>
                {status && <p>{status}</p>}
            </fieldset>
            </div>
            </body>
    );
}