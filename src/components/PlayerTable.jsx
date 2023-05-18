import React from "react";
import { PlayerCard } from "./PlayerCard";

export const PlayerTable = ({ playerArray }) => {
  return (
    <table className="table-auto border-collapse border border-slate-400 p-3 text-center playerTable">
      <thead>
        <tr>
          <th>Stt</th>
          <th>Name</th>
          <th>Image</th>
          <th>Positions</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {playerArray.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </tbody>
    </table>
  );
};
