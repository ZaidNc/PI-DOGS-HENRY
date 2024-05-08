import React from "react";
import s from "../styles/DogCard.module.css";

export default function DogCard({ name, img, temperaments, weightMin, weightMax }) {
  return (
    <div className={s.dogContainer}>
      <img className={s.dogImage} src={img} alt="img not found" />
      <h3 className={s.subTitle}>{name}</h3>
      <h5 className={s.temperament}>{temperaments}</h5>
      <h5 className={s.weight}>Peso: {weightMin}kg - {weightMax}kg</h5>
    </div>
  );
}
