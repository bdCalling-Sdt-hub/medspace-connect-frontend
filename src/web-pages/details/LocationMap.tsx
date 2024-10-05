'use client';
import ReactMapGL from 'react-map-gl';
import { IoLocationOutline } from 'react-icons/io5';
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
                        longitude: -100,
                        latitude: 40,
                        zoom: 1,
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapboxAccessToken="pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ"
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                />
            </div>
        </div>
    </div>
);

export default LocationMap;
