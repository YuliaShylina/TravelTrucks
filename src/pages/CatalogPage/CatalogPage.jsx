import { useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter.jsx";
import TrucksList from "../../components/TrucksList/TrucksList.jsx";
import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { fetchAllTrucksForFirstPage } from "../../redux/catalog/operations.js";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucksForFirstPage());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Filter />
      <TrucksList />
    </div>
  );
}
