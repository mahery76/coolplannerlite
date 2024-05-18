"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
function page() {
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState(new Date());

  const { id: group_id } = useParams();
  const group_name = searchParams.get("group_name");
  return (
    <div>
      {/* date navigation and buttons */}
      <div className="flex md:justify-center overflow-auto">
        <div className="flex items-center justify-evenly gap-4 md:gap-8 pr-4  bg-white mx-4">

          {/* Generate */}
          <div
            className="h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4   cursor-pointer hover:bg-blue-300"
            title="generer"
          >
            <BsStars />
            <div className="hidden md:block ">Génerer</div>
          </div>

          {/* Refresh */}
          <div
            className="h-12 flex items-center justify-center  gap-2 bg-blue-200 rounded-full px-4   cursor-pointer hover:bg-blue-300"
            title="Actualiser"
          >
            <MdOutlineRefresh />
            <div className="hidden md:block ">Actualiser</div>
          </div>

          {/* timetable info */}
          <div>
            {group_name}
          </div>

          {/* Mark */}
          <div
            className="h-12 flex items-center justify-center gap-2 bg-green-200 rounded-full px-4  cursor-pointer hover:bg-green-300"
          >
            <FaMarker />
            <div className="hidden md:block ">Marquer</div>
          </div>

          {/* Clear */}
          <div
            className="h-12 flex items-center justify-center gap-2 bg-green-200 rounded-full px-4  cursor-pointer hover:bg-green-300"
          >
            <AiOutlineClear />
            <div className="hidden md:block ">Effacer</div>
          </div>
        </div>
      </div>

      {/* timetable section*/}
      <div className="flex m-4">
        <div>creneaux</div>
        <div>Lun</div>
        <div>Mar</div>
        <div>Mer</div>
        <div>Jeu</div>
        <div>Ven</div>
        <div>Sam</div>
      </div>
    </div>
  );
}
export default page;
