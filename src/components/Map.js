import GoogleMapReact from 'google-map-react'

const Map = ({center, zoom}) => {
    return (
        <div>
            <GoogleMapReact className="map" bootstrapURLKeys={{key: 'AIzaSyBqzdHETbhJwPEitabcyEoKUsoqSjxKmasU'}}
                defaultZoom = {zoom}
                defaultCenter = {center}
            >
            </GoogleMapReact>
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom : 6
}

export default Map;
