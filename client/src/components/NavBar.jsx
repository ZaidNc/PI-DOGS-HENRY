import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../image832.png";
import Imge from "../g26407.png";
import { getDogs, getTemperaments } from "../actions";
import s from "../styles/NavBar.module.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <header>
      <nav className={s.navbar}>
        <ul className={s.list}>
          <li className={s.list_item}>
            <NavLink className={s.home} exact to="/">
              <img className={s.imgHome} id="logoDog" src={Logo} alt="" />
            </NavLink>
            <div className={s.t_f_s}>
              <h1 className={s.title}>PI-Dogs</h1>
              <SearchBar />
            </div>
            <Link className={s.newdog} to="/dogs">
              <img className={s.imgNew} src={Imge} alt="Crear nuevo perro" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
