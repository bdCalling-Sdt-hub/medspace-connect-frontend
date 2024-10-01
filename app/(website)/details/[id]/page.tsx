"use client";
import Image from "next/image";
import React from "react";
import Profile from "/public/assets/profile.png";
import { Button } from "antd";
import CustomSlider from "./CustomSlider";
import Subscribe from "@/src/pages/home/Subscribe";
import ReactMapGL from "react-map-gl";

import { IoLocationOutline } from "react-icons/io5";
const SpaceDetails = (params: any) => {
  return (
    <>
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-7 p-5">
            <CustomSlider />
            <div className="my-4 space-y-5">
              {/* descrtopmn */}
              <h1 className="text-3xl text-[#333333]">Description</h1>
              <p className="text-primaryText">
                amet, ex Ut adipiscing sodales. massa placerat. Sed eget
                fringilla gravida nisi Donec eu eu tempor nulla, nulla, leo.
                faucibus tortor. Donec libero, elementum tincidunt id tincidunt
                dui faucibus turpis consectetur amet, nibh luctus nibh lacus, ex
                hendrerit fringilla fringilla est. lacus Nunc tincidunt
                dignissim, id nec Lorem dui Sed nibh id elementum non tincidunt
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5  p-5">
            {/* booking section */}
            <div className="bg-white drop-shadow-md space-y-5 p-8 rounded-md">
              <h1 className="text-2xl text-primaryText font-semibold">
                Doctors Practice Room
              </h1>
              <div className="flex items-center gap-3">
                <Image
                  height={33}
                  width={33}
                  className="rounded-full"
                  src={Profile}
                  alt="profile"
                />
                <h2 className="text-lg text-primaryText">Favez Abdualla</h2>
              </div>
              <div className="h-0.5 w-full bg-primaryText/20"></div>
              <div className="flex items-center gap-2">
                <p className="text-4xl text-primaryText ">Price:</p>
                <div className="flex items-center">
                  <p className="text-4xl text-primary">$150/</p>{" "}
                  <span className="block text-primary">mon</span>
                </div>
              </div>
              <div className="h-0.5 w-full bg-primaryText/20"></div>
              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <p className="text-primaryText/60">Practice for :</p>
                  <p className="text-primaryText">Dental care</p>
                </div>
                <div className="flex items-center gap-5">
                  <p className="bg-secondary text-white py-0.5 px-1 drop-shadow-xl rounded">
                    Facilities
                  </p>
                  <span className="text-primaryText/60">:</span>
                  <p className="text-primaryText">
                    furnished / Newest/ Hospital
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-primaryText/60">Opening Date :</p>
                  <p className="text-primaryText">1 Oct, 2024</p>
                </div>
              </div>

              <div>
                <Button
                  shape="round"
                  className="px-6"
                  style={{
                    height: "54px",
                    width: "100%",
                    backgroundColor: "#0A8FDC",
                    fontSize: 16,
                    border: "none",
                    color: "#fff",
                  }}
                >
                  Interested
                </Button>
              </div>
            </div>
            <div className=" mx-auto p-4 drop-shadow-md  rounded-lg shadow-lg">
              <div className="h-[383px] w-full ">
                <div className="flex items-center my-2 gap-4">
                  <IoLocationOutline className="text-secondary" size={24} />
                  <p className="text-gray-700">
                    55/A, b park road, Abcd area, New York
                  </p>
                </div>
                <ReactMapGL
                  initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 1,
                  }}
                  style={{ width: "100%", height: 300, borderRadius: 100 }}
                  mapboxAccessToken="pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ"
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default SpaceDetails;
