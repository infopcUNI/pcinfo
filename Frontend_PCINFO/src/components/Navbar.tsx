import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaMicrochip,
  FaLaptop,
  FaCode,
  FaLightbulb,
  FaStar,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) =>
    setOpenDropdown(openDropdown === menu ? null : menu);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <NavLink to="/" className={styles.navbarLogo}>
          💻 PC Info
        </NavLink>

        {/* Botón hamburguesa (móvil) */}
        <button className={styles.navbarToggle} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>

        {/* Menu */}
        <ul className={`${styles.navbarMenu} ${isOpen ? styles.active : ""}`}>
          {/* Componentes */}
          <li className={styles.navbarItem}>
            <button
              onClick={() => toggleDropdown("componentes")}
              className={styles.navbarLink}
            >
              <FaMicrochip />
              <span className={styles.linkText}>Componentes</span>
              {openDropdown === "componentes" ? (
                <FaChevronUp className={styles.arrow} />
              ) : (
                <FaChevronDown className={styles.arrow} />
              )}
            </button>
            {openDropdown === "componentes" && (
              <ul className={styles.dropdown}>
                <li>
                  <NavLink to="/componentes/procesador">Procesadores</NavLink>
                </li>
                <li>
                  <NavLink to="/componentes/memoria">Memoria RAM</NavLink>
                </li>
                <li>
                  <NavLink to="/componentes/gpu">Tarjetas Gráficas</NavLink>
                </li>
                <li>
                  <NavLink to="/componentes/almacenamiento">
                    Almacenamiento
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Computadoras */}
          <li className={styles.navbarItem}>
            <button
              onClick={() => toggleDropdown("computadoras")}
              className={styles.navbarLink}
            >
              <FaLaptop />
              <span className={styles.linkText}>Computadoras</span>
              {openDropdown === "computadoras" ? (
                <FaChevronUp className={styles.arrow} />
              ) : (
                <FaChevronDown className={styles.arrow} />
              )}
            </button>
            {openDropdown === "computadoras" && (
              <ul className={styles.dropdown}>
                <li>
                  <NavLink to="/computadoras/pc-escritorio">
                    PC de Escritorio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/computadoras/laptops">Laptops</NavLink>
                </li>
                <li>
                  <NavLink to="/computadoras/workstations">Workstations</NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Lenguajes */}
          <li className={styles.navbarItem}>
            <NavLink to="/lenguajes" className={styles.navbarLink}>
              <FaCode />
              <span className={styles.linkText}>Lenguajes</span>
            </NavLink>
          </li>

          {/* Curiosidades */}
          <li className={styles.navbarItem}>
            <NavLink to="/curiosidades" className={styles.navbarLink}>
              <FaLightbulb />
              <span className={styles.linkText}>Curiosidades</span>
            </NavLink>
          </li>

          {/* Recomendaciones */}
          <li className={styles.navbarItem}>
            <NavLink to="/recomendaciones" className={styles.navbarLink}>
              <FaStar />
              <span className={styles.linkText}>Recomendaciones</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;