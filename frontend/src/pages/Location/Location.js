import React, {useState, useEffect } from 'react'
import Map,{Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { Link } from 'react-router-dom';
import "./Location.css"
import Card from '../Cards/Card';

const Location = () => {
    const [mark, setMark] = useState([])


    const marMarkter = async () => {
        const res = await fetch("http://localhost:9999/api/tourist") 
        const data = await res.json()
        setMark(data)
        console.log(mark)
    }

    useEffect(()=>{
        marMarkter() 
    },[])


    return (
        <>
            <div className='map'>
                <Map initialViewState={{ longitude: 83.3012842, latitude: 17.7231276, zoom: 8 }}
                    mapboxAccessToken='pk.eyJ1Ijoic2hpdmExNjgiLCJhIjoiY2xjMWZyZWlhMGNwZDN2b2R4dzVyOGFlYSJ9.snSXqrmACLeeadbFeZlkcw'
                    style={{
                        height: "300px",
                        border: "1px solid black",
                        overflow: "hidden",
                        // zoom:6
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v9" 
                    >
                    {
                        mark.map((item, i) => {
                            const {location:{coordinate:[a,b]}} = item
                            return(
                                <>
                                    <Marker  key={i}
                                        longitude= {a} latitude = {b} 
                                    />

                                   
                                </>
                            )
                        })
                    }
                </Map>
                <Link to="/Addlocation" className='mapbox'>Add location</Link>

            </div>
            <div className='card-flex'>
            <Card />

            </div>
        </>
    )
}

export default Location