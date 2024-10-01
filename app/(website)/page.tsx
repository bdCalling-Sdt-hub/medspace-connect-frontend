import Filter from "@/src/components/ui/Filter";
import Professional from "@/src/pages/home/Professional";
import RecentPost from "@/src/pages/home/RecentPost";
import Subscribe from "@/src/pages/home/Subscribe";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Filter />
      <RecentPost />
      <Professional />
      <Subscribe />
    </div>
  );
};

export default HomePage;
