'use client';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import MarkerImage from '/public/assets/marker.webp';
import { IoLocationOutline } from 'react-icons/io5';
import Image from 'next/image';
const LocationMap = () => (
    <div className="mx-auto p-5 drop-shadow-xl bg-white rounded-xl">
        <div className="h-[383px] w-full">
            <div className="flex items-center my-2 gap-4">
                <IoLocationOutline className="text-secondary" size={24} />
                <p className="text-gray-700">55/A, B Park Road, Abcd area, New York</p>
            </div>
            <div className="overflow-hidden" style={{ width: '100%', height: 350, borderRadius: '10px' }}>
                <ReactMapGL
                    initialViewState={{
                        longitude: 90.4371,
                        latitude: 23.7935,
                        zoom: 5,
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapboxAccessToken="pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ"
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    <Marker longitude={90.4371} latitude={23.7935} anchor="bottom">
                        <Image src={MarkerImage} alt="marker" width={30} height={30} />
                    </Marker>
                </ReactMapGL>
            </div>
        </div>
    </div>
);

export default LocationMap;
