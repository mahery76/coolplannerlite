"use client";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { deleteGroup } from "@/parameters/groups/_api/groupApi";

function GroupsList({ groups, setGroups }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredGroups = groups.filter(
    (group) =>
      group.group_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.major_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:w-[30rem]">
      {/* Timeslot input search */}
      <div className="flex my-2 w-full items-center mb-4">
        <div className="w-full  flex items-center">
          <CiSearch className="text-darkGray absolute ml-3 size-6" />
          <input
            type="text"
            className="bg-white w-full h-10 text-center rounded-md border-[1px] border-gray"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* groups's list */}
      <div className="overflow-auto max-h-[45vh] w-full flex justify-center">
        <table>
          <thead className="mb-3">
            <tr>
              <th className="px-4 sticky top-0 bg-blue-50"></th>
              <th className="px-4 sticky top-0 bg-blue-50">Classe</th>
              <th className="px-4 sticky top-0 bg-blue-50">Effectif</th>
              <th className="px-4 sticky top-0 bg-blue-50">Département</th>
            </tr>
          </thead>
          <tbody>
            {filteredGroups.map((group) => (
              <tr
                key={group.group_id}
                className="odd:bg-blue-body even:bg-blue-body-secondary hover:opacity-50"
              >
                <td
                  className="whitespace-nowrap px-2 py-3"
                  onClick={() => deleteGroup(group.group_id, setGroups, groups)}
                >
                  <TiDeleteOutline className="text-xl text-violet-500 cursor-pointer hover:scale-125 " />
                </td>
                <td className="text-center whitespace-nowrap px-2 py-3">
                  {group.group_name}
                </td>
                <td className="text-center whitespace-nowrap px-2 py-3">
                  {group.group_size}
                </td>
                <td className="text-center whitespace-nowrap px-2 py-3">
                  {group.major_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GroupsList;