import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Address: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>
        <Skeleton />
      </h1>
      <h2>
        <Skeleton />
      </h2>
    </div>
  );
};

export default Address;
