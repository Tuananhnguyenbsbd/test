import React, { useCallback, useEffect, useMemo, useState } from "react";
import PositionSelection from "./PositionSelection";
import { PlayerTable } from "./PlayerTable";
const playerArrayInit = [
  {
    id: 1,
    name: "Erling Haaland",
    positions: ["forward"],
    team: "Manchester City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "Thibaut Courois",
    positions: ["goalkeeper"],
    team: "Real Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg",
  },
];
export const FilteredPlayerTable = () => {
  const [position, setPosition] = useState("All");
  const [playerArray, setPlayerArray] = useState(playerArrayInit);
  const handelChangePositions = useCallback((value) => {
    setPosition(value);
  }, []);
  const Allpositions = useMemo(() => {
    return playerArray.map((player) => player.positions).flat();
  }, []);
  const handelFilter = (position, data) => {
    if (position == "All") {
      return playerArrayInit;
    } else {
      return data.filter((player) => player.positions.includes(position));
    }
  };
  useEffect(() => {
    setPlayerArray(handelFilter(position, playerArrayInit));
  }, [position]);
  return (
    <div>
      <PositionSelection
        Allpositions={Allpositions}
        changePositions={handelChangePositions}
      />
      <PlayerTable playerArray={playerArray} />
    </div>
  );
};
