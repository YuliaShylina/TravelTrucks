import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import photo from "../../assets/img/Logo.png";
import photo2x from "../../assets/img/Logo-2x.png";

export default function NavigationBar() {
  return (
    <div className={css.container}>
      <picture>
        <source srcSet={`${photo2x} 2x`} />
        <img src={photo} alt="logotype" className={css.img} />
      </picture>
      <NavLink
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        to="/catalog"
        end
      >
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        to="/favorites"
        end
      >
        Favorites
      </NavLink>
    </div>
  );
}
