import styles from "../styles/pageone.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function Home() {
  const Ref = useRef(null);
  const [Wishes, setWishes] = useState([]);
  const [wish, setWish] = useState("");

  useEffect(() => {
    localStorage.setItem('Wishes', JSON.stringify(Wishes));
  }, [Wishes]);
  const listItems = Wishes.map((wsh) => <li key={wsh.toString()}> {wsh}</li>);



  const handleSubmit = (e) => {
    e.preventDefault();
    Ref.current.value == ""
      ? setWishes(Wishes)
      : setWishes((Wishes) => [...Wishes, Ref.current.value]);

    setWish("");
  };
  return (
    <>
      <div>
        <div>
          <header className={styles.header}>
            <div className={styles.containerh}>
              <div className={styles.containerhc}>
                <div className={styles.item1}>
                  <a href="https://example.com">Travelme</a>
                </div>
                <div className={styles.item2}>
                  <a href="https://example.com">Tours</a>
                  <div></div>
                  <a href="https://example.com">Book a Trip</a>
                  <div></div>
                  <a href="https://example.com">Ask for Guide</a>
                  <div></div>
                  <a href="https://example.com">History</a>
                  <div></div>
                  <a href="https://example.com">Reviews</a>
                  <div></div>
                  <button>SignUp</button>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.bigcont}>
            <div className={styles.cont}>
              <div className={styles.textcont}>
                <h1>Welcome to Travelme </h1>
                <span>
                  The number one destination guide for touriest all around the
                  world
                </span>
                <h5>Join us now</h5>
                <button>Join</button>
              </div>
              <div className={styles.imgcont}>
                <div>
                  <img
                    src="https://thepointsguy.global.ssl.fastly.net/us/originals/2021/04/TPG-App-Feature.jpg?width=1920"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.seccont}>
          <h1>Why join Us ?</h1>
          <div className={styles.bigcont}>
            <div className={styles.cont}>
              <div className={styles.imgcont} style={{ alignItems: "center" }}>
                <div>
                  <img
                    src="http://thepakistanitraveller.assamartist.com/wp-content/uploads/2019/11/new-lahore-tourist-attraction-map-assam-artist-highresolution.jpg"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className={styles.textcont}>
                <h4>The benifits that it yields </h4>
                <span style={{ fontSize: "18px" }}>
                  there are alot of djaspfjsd;vjsdf;aj;a jdfk asd;kf svnsf;anjsd
                  hakl dhflashfkljasdhfjk asdf nasdlncjasdfln adl
                  dasjfsdlajgfasdlkjgfajkl sdgfkl jsdgjkbsfkajfnad;f;asd
                  hfasdkl; fhasdklgnf; lsfgl;ak sl;gkn asjdfldasn
                </span>
                <div style={{ height: "25px" }}></div>
                <span style={{ fontSize: "18px" }}>
                  there are alot of djaspfjsd;vjsdf;aj;a jdfk asd;kf svnsf;anjsd
                  hakl dhflashfkljasdhfjk asdf nasdlncjasdfln adl
                  dasjfsdlajgfasdlkjgfajkl sdgfkl jsdgjkbsfkajfnad;f;asd
                  hfasdkl; fhasdklgnf; lsfgl;ak sl;gkn asjdfldasn
                </span>
                <button>Join</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.seccont}
          style={{ backgroundColor: "transparent", paddingTop: "90px" }}
        >
          <h1>Tell Us Where You Would Like To Go</h1>
          <div className={styles.bigcont} style={{ overflow: "auto" }}>
            <div className={styles.cont2} style={{ padding: "40px" }}>
              <form onSubmit={handleSubmit} style={{ display: "flex" ,position:"sticky", top:"0px"}}>
                <input 
                  className={styles.form}
                  placeholder="Wishes"
                  onChange={(e) => setWish(e.target.value)}
                  value={wish}
                  ref={Ref}
                ></input>
                <div style={{ width: "20px" }}></div>
                <button
                  style={{
                    width: "80px",
                    height: "45px",
                    padding: "0px",
                    fontSize: "18px",
                  }}
                  type="submit"
                >
                  Wish
                </button>
              </form>
              <div>
                <ul>{listItems}</ul>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div style={{ backgroundColor: "black" }}>
            <div className={styles.footflex}>
              <div>
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Tours</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employees</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div style={{ margin: "auto" }}>
                <a href="#">
                  <i></i>
                </a>
                <a href="#">
                  <i></i>
                </a>
                <a href="#">
                  <i></i>
                </a>
                <a href="#">
                  <i></i>
                </a>
                <p>Travelme © 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
