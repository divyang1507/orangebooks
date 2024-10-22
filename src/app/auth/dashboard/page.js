'use client'
import React from "react";
import { toast } from "react-toastify";

const page = () => {
 

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Enter name" required />
          <input type="text" name="price" placeholder="Enter name" required />
          <input type="text" name="rating" placeholder="Enter name" required />
          <input type="text" name="star" placeholder="Enter name" required />
          <input type="text" name="stock" placeholder="Enter name" required />
          <textarea
            name="description"
            placeholder="Enter description"
            required></textarea>
          <input type="file" name="image" accept="image/*" required />
          <button type="submit">Upload Data</button>
        </form>
      </div>
    </>
  );
};

export default page;
