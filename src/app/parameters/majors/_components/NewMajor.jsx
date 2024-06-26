"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { addMajor } from "@/api/majorsApi";
import OpenAddButton from "@/components/OpenAddButton";
import AddButton from "@/components/AddButton";

function NewMajor({ majors, setMajors }) {
  const [isNewMajor, setIsNewMajor] = useState(false);
  const addNewMajor = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));
    addMajor(object, setIsNewMajor, majors, setMajors);
  };
  return (
    <div>
      <OpenAddButton
        title="Ajouter département"
        handleAdd={() => setIsNewMajor(() => true)}
      />
      <Modal
        isOpen={isNewMajor}
        onClose={() => setIsNewMajor(() => false)}
      >
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouveau département
        </h2>

        <form onSubmit={addNewMajor} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
      rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="major_name"
            placeholder="Nom du département"
            required
          />
               <AddButton />

        </form>
      </Modal>
    </div>
  );
}

export default NewMajor;
