import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import styles from "./pages/App.module.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <nav
          className={styles.nav}
          role="navigation"
          aria-label="Menu principal"
        >
          <h1 className={styles.logo}>
            <span className={styles.kanji}>家族</span>
          </h1>

          <button
            onClick={toggleMenu}
            className={styles.burger}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <ul className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
