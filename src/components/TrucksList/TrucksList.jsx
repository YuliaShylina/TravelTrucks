import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./TrucksList.module.css";
import {
  selectAllTrucks,
  selectHasMore,
  selectIsLoading,
} from "../../redux/catalog/selectors.js";
import { fetchAllTrucks } from "../../redux/catalog/operations.js";
import TruckItem from "../TruckItem/TruckItem.jsx";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader.jsx";
import { nanoid } from "nanoid";

export default function TrucksList() {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasMore);
  const trucks = useSelector(selectAllTrucks);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  async function getNextPageTrucks() {
    try {
      await dispatch(fetchAllTrucks()).unwrap();
      toast.success("Vehicles loaded successfully!");
    } catch {
      toast.error("Failed to load vehicles!");
    }
  }
  return (
    <div className={css.container}>
      {trucks.length > 0
        ? trucks.map((item) => <TruckItem key={nanoid()} data={item} />)
        : null}
      {hasNextPage ? (
        <button
          className={css.loadMore}
          onClick={getNextPageTrucks}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader width="20" height="20" color="var(--Main)" />
          ) : (
            "Load more"
          )}
        </button>
      ) : null}
    </div>
  );
}
