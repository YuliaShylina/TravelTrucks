import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { selectIsLoadingTruck } from "../../redux/catalog/selectors.js";
import TruckTitle from "../../components/TruckTitle/TruckTitle.jsx";
import TruckPicture from "../../components/TruckPicture/TruckPicture.jsx";
import TruckDetails from "../../components/TruckDetails/TruckDetails.jsx";
import { fetchTruckById } from "../../redux/catalog/operations.js";
import Loader from "../../components/Loader/Loader";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(selectIsLoadingTruck);

  useEffect(() => {
    dispatch(fetchTruckById(id));
  }, [dispatch, id]);

  return (
    <div className={css.container}>
      <Toaster position="top-center" reverseOrder={false} />
      {loading && <Loader />}
      {!loading && (
        <>
          <TruckTitle />
          <TruckPicture />
          <TruckDetails />
        </>
      )}
    </div>
  );
}
