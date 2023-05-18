import React, { useState, memo } from "react";
const PositionSelection = ({ Allpositions, changePositions }) => {
  console.log("render");
  return (
    <>
      <span>Choose Position You Want Display</span>
      <select
        onChange={(e) => changePositions(e.target.value)}
        className="mb-5 text-black"
      >
        <option defaultValue="all">All</option>
        {Allpositions.map((position) => (
          <option value={position}>{position}</option>
        ))}
      </select>
    </>
  );
};
export default memo(PositionSelection);
