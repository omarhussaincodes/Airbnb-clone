import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';
import { getDistance, getCenter } from 'geolib';
import { Marker } from 'react-map-gl';
import { Popup } from 'react-map-gl';

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});

    // Transforming searchresult to {latitude,longitude} object
    const coordinates = searchResults.map(result => ({
        latitude: result.lat,
        longitude: result.long
    }));

    console.log(coordinates);

    const center = getCenter(coordinates);
    console.log(center);

    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: '100%',
        latitude: parseInt(center.latitude),
        longitude: parseInt(center.longitude),
        zoom: 11
    });

    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            {
                searchResults.map((result) => (
                    <Marker
                        key={result.long}
                        latitude={parseInt(result.lat)}
                        longitude={parseInt(result.long)}
                        offsetLeft={20}
                        offsetTop={10}
                    >
                        {
                            selectedLocation.long === result.long && <p className='bg-white border-2 text-gray-600'>
                                <Popup
                                    closeOnClick={true}
                                    onClick={setSelectedLocation({})}
                                >
                                    {selectedLocation.title}
                                </Popup>
                            </p>
                        }
                        <p onClick={(result) => setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce'>
                            P
                        </p>
                    </Marker>
                ))
            }
        </ReactMapGL>
    )
}

export default Map