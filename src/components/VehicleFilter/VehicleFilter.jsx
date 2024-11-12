import css from "./VehicleFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTrucksForFirstPage } from "../../redux/catalog/operations.js";
import {
  selectAC,
  selectBathroom,
  selectForm,
  selectKitchen,
  selectTransmission,
  selectTV,
} from "../../redux/filter/selectors.js";
import {
  setForm,
  setTransmission,
  toggleAC,
  toggleBathroom,
  toggleKitchen,
  toggleTV,
} from "../../redux/filter/slice.js";
import toast from "react-hot-toast";
import { selectIsLoading } from "../../redux/catalog/selectors.js";
import Loader from "../Loader/Loader.jsx";
import sprite from "../../assets/sprite.svg";

export default function VehicleFilter() {
  const form = useSelector(selectForm);
  const AC = useSelector(selectAC);
  const transmission = useSelector(selectTransmission);
  const kitchen = useSelector(selectKitchen);
  const tv = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  async function getAllTrucks() {
    try {
      await dispatch(fetchAllTrucksForFirstPage()).unwrap();
      toast.success("Vehicles loaded successfully!");
    } catch {
      toast.error("Failed to load vehicles!");
    }
  }

  return (
    <div className={css.container}>
      <h3 className={css.title}>Filters</h3>
      <h2 className={css.scndTitle}>Vehicle equipment</h2>

      <div className={css.equipment}>
        <div
          className={AC ? css.eqItemActive : css.eqItem}
          onClick={() => dispatch(toggleAC())}
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-wind`} />
          </svg>
          <p className={css.itemText}>AC</p>
        </div>
        <div
          className={transmission ? css.eqItemActive : css.eqItem}
          onClick={() => dispatch(setTransmission())}
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-diagram`} />
          </svg>
          <p className={css.itemText}>Automatic</p>
        </div>
        <div
          className={kitchen ? css.eqItemActive : css.eqItem}
          onClick={() => dispatch(toggleKitchen())}
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-cup`} />
          </svg>
          <p className={css.itemText}>Kitchen</p>
        </div>
        <div
          className={tv ? css.eqItemActive : css.eqItem}
          onClick={() => dispatch(toggleTV())}
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-tv`} />
          </svg>
          <p className={css.itemText}>TV</p>
        </div>
        <div
          className={bathroom ? css.eqItemActive : css.eqItem}
          onClick={() => dispatch(toggleBathroom())}
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-shower`} />
          </svg>
          <p className={css.itemText}>Bathroom</p>
        </div>
      </div>

      <h2 className={css.scndTitle}>Vehicle type</h2>
      <div className={css.type}>
        <div
          className={form === "panelTruck" ? css.typeItemActive : css.typeItem}
          onClick={() =>
            form === "panelTruck"
              ? dispatch(setForm(""))
              : dispatch(setForm("panelTruck"))
          }
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-bi_grid-1x2`} />
          </svg>
          <p className={css.itemText}>Van</p>
        </div>
        <div
          className={
            form === "fullyIntegrated" ? css.typeItemActive : css.typeItem
          }
          onClick={() =>
            form === "fullyIntegrated"
              ? dispatch(setForm(""))
              : dispatch(setForm("fullyIntegrated"))
          }
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-bi_grid-3x3`} />
          </svg>
          <p className={css.itemText}>Fully Integrated</p>
        </div>
        <div
          className={form === "alcove" ? css.typeItemActive : css.typeItem}
          onClick={() =>
            form === "alcove"
              ? dispatch(setForm(""))
              : dispatch(setForm("alcove"))
          }
        >
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-bi_grid`} />
          </svg>
          <p className={css.itemText}>Alcove</p>
        </div>
      </div>

      <button
        className={css.searchBtn}
        onClick={getAllTrucks}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader width={20} height={20} color="var(--White)" />
        ) : (
          "Search"
        )}
      </button>
    </div>
  );
}
