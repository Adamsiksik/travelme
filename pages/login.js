import { useRef } from "react";
import styles from "../styles/login.module.css";

export default function Home() {
  const emailRef=useRef(null);
  const passRef=useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email is ${emailRef.current.value} and Passwordd is ${passRef.current.value}`);

  };
  return (
    <>
    <section className={styles.section}>
        <div className={styles.box}>
            <div className={styles.value}>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.h2}>Login</h2>
                    <div className={styles.inputbox}>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input required ref={emailRef}/>
                        <label for="">Email</label>
                    </div>
                    <div className={styles.inputbox}>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required ref={passRef}/>
                        <label for="">Password</label>
                    </div>
                    <div className={styles.forget}>
                        <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
                      
                    </div>
                    <button className={styles.button}>Log in</button>
                    <div className={styles.register}>
                        <p>Don't have a account <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  );
}
