import * as React from 'react'
import Map,{Marker } from 'react-map-gl';
// import { Link } from 'react-router-dom';
import "./MapStyle.css"
const LocationMap = ({lag,lat}) => {
    // const [mark, setMark] = useState([])



  
    return (
        <div className="maplocation">
            <div className='maps'>
                <Map 
                    mapboxAccessToken='pk.eyJ1Ijoic2hpdmExNjgiLCJhIjoiY2xjMWZyZWlhMGNwZDN2b2R4dzVyOGFlYSJ9.snSXqrmACLeeadbFeZlkcw'
                    style={{
                        width:"550px",
                        height: "550px",
                        border: "1px solid black",
                        overflow: "hidden",
                    }} 
                    initialViewState={{ longitude: lag, latitude: lat, zoom: 10 }}mapStyle="mapbox://styles/mapbox/streets-v9" >
                    
                            return (
                                <>
                                    <Marker 
                                        longitude={lag} latitude={lat}
                                    />


                                </>
                            )
                
                </Map>
              
            </div>
        </div>

    )
}
export default LocationMap