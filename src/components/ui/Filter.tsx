"use client";
import { Button } from "antd";
import { useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";

const Filter = () => {
  const [filter, setFilter] = useState(false);
  // console.log(filter);
  return (
    <div className="bg-[#F7F7F7] pb-8 pt-2 ">
      <div className="flex items-center w-[300px] md:w-[699px] h-[64px] mx-auto bg-white px-1 shadow-lg rounded-full overflow-hidden">
        {/* Search Input */}

        <input
          placeholder="Search here"
          className="flex-1 h-[54px] text-sm w-[141px] border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none border-transparent px-8 py-2 text-primaryText"
        />

        {/* Filter Button */}

        <Button
          onClick={() => setFilter(!filter)}
          shape="round"
          icon={<IoOptionsOutline size={24} />}
          className="px-6"
          style={{
            height: "54px",
            width: "141px",
            backgroundColor: "#0A8FDC",
            color: "#fff",
          }}
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

export default Filter;
