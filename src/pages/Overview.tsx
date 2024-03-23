import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Overview: React.FC = () => {
  const { profile, setProfile } = useContext(DataContext);

  return (
    <div>
      <div>
        <h1>Overview</h1>
        {/* <p>
          {profile.name} is enrolled in {profile.college} for {profile.years}{" "}
          years.
        </p> */}
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
      </div>
    </div>
  );
};

export default Overview;
