import css from "./TruckOptions.module.css";
import sprite from "../../assets/sprite.svg";

export default function TruckOptions({ data }) {
  return (
    <div className={css.container}>
      {data.transmission === "automatic" ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-diagram`} />
          </svg>
          <p className={css.optionText}>Automatic</p>
        </div>
      ) : null}

      {data.AC ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-wind`} />
          </svg>
          <p className={css.optionText}>AC</p>
        </div>
      ) : null}

      {data.engine ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-Group`} />
          </svg>
          <p className={css.optionText}>Engine</p>
        </div>
      ) : null}

      {data.gas ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-gas-stove`} />
          </svg>
          <p className={css.optionText}>Gas</p>
        </div>
      ) : null}

      {data.kitchen ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-cup`} />
          </svg>
          <p className={css.optionText}>Kitchen</p>
        </div>
      ) : null}

      {data.radio ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-ui-radios`} />
          </svg>
          <p className={css.optionText}>Radio</p>
        </div>
      ) : null}

      {data.bathroom ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-shower`} />
          </svg>
          <p className={css.optionText}>Bathroom</p>
        </div>
      ) : null}

      {data.TV ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-tv`} />
          </svg>
          <p className={css.optionText}>TV</p>
        </div>
      ) : null}

      {data.refrigerator ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-fridge`} />
          </svg>
          <p className={css.optionText}>Refrigerator</p>
        </div>
      ) : null}

      {data.microwave ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-microwave`} />
          </svg>
          <p className={css.optionText}>Microwave</p>
        </div>
      ) : null}

      {data.water ? (
        <div className={css.optionItem}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-water`} />
          </svg>
          <p className={css.optionText}>Water</p>
        </div>
      ) : null}
    </div>
  );
}
