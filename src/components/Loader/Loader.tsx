import React, { FC } from "react";
import { useAppSelector } from "../../redux";
import LoaderComponent from "./LoaderComponent";

const Loader: FC = () => {
  const isLoading = useAppSelector((state) => state.store.isLoading);
  return (
    <>
      {isLoading && (
        <LoaderComponent>
          <div className="lds-dual-ring" />
        </LoaderComponent>
      )}
    </>
  );
};

export default Loader;
