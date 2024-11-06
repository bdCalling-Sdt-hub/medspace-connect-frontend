'use client';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, ViewState } from 'react-map-gl';
import MarkerImage from '/public/assets/marker.webp';
import { IoLocationOutline } from 'react-icons/io5';
import Image from 'next/image';

interface LocationMapProps {
      location: string;
}

interface Coordinates {
      latitude: number;
      longitude: number;
}

const LocationMap: React.FC<LocationMapProps> = ({ location }) => {
      const [viewport, setViewport] = useState<ViewState>({
            latitude: 23.7935,
            longitude: 90.4371,
            zoom: 5,
            bearing: 0,
            pitch: 0,
            padding: { top: 0, bottom: 0, left: 0, right: 0 }, // Optional padding
      });
      const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

      useEffect(() => {
            const fetchCoordinates = async () => {
                  try {
                        const response = await fetch(
                              `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                                    location
                              )}.json?access_token=pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ`
                        );
                        const data = await response.json();
                        if (data.features && data.features.length > 0) {
                              const [longitude, latitude] = data.features[0].center;
                              setCoordinates({ latitude, longitude });
                              setViewport((prev) => ({ ...prev, latitude, longitude, zoom: 10 }));
                        }
                  } catch (error) {
                        console.error('Error fetching coordinates:', error);
                  }
            };

            if (location) {
                  fetchCoordinates();
            }
      }, [location]);

      const handleViewportChange = (newViewport: ViewState) => {
            setViewport(newViewport);
      };

      return (
            <div className="mx-auto p-5 drop-shadow-xl bg-white rounded-xl">
                  <div className="h-[383px] w-full">
                        <div className="flex items-center my-2 gap-4">
                              <IoLocationOutline className="text-secondary" size={24} />
                              <p className="text-gray-700">{location}</p>
                        </div>
                        <div className="overflow-hidden" style={{ width: '100%', height: 350, borderRadius: '10px' }}>
                              <ReactMapGL
                                    {...viewport}
                                    onMove={(evt) => handleViewportChange(evt.viewState)}
                                    mapboxAccessToken="pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ"
                                    mapStyle="mapbox://styles/mapbox/streets-v9"
                              >
                                    {coordinates && (
                                          <Marker
                                                longitude={coordinates.longitude}
                                                latitude={coordinates.latitude}
                                                anchor="bottom"
                                          >
                                                <Image src={MarkerImage} alt="marker" width={30} height={30} />
                                          </Marker>
                                    )}
                              </ReactMapGL>
                        </div>
                  </div>
            </div>
      );
};

export default LocationMap;
