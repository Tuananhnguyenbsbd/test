import React from "react";

export const PlayerCard = ({ player }) => {
  return (
    <tr>
      <td className="border border-slate-300">{player.id}</td>
      <td className="border border-slate-300">{player.name}</td>
      <td className="border border-slate-300">
        <img
          className="inline-block h-20 w-20 rounded-full ring-2 ring-white object-cover"
          src={player.image}
          alt=""
        />
      </td>
      <td className="border border-slate-300">
        <ul>
          {player.positions.map((position, index) => (
            <li key={index}>{position}</li>
          ))}
        </ul>
      </td>
      <td className="border border-slate-300">{player.team}</td>
    </tr>
  );
};
