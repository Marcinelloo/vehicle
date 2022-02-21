import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import Marker from "./Marker";
import Cluster from "./Cluster";
import Vehicle from "./Vehicle";

const Map = ({ data }) => {
  const mapRef = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const lat = data.length > 0 ? data[0].location.latitude : 40;
  const lng = data.length > 0 ? data[0].location.longitude : 21;

  const points = data.map((vehicle) => ({
    type: "Feature",
    properties: {
      cluster: false,
      vehicleId: vehicle.id,
      category: vehicle.discriminator,
      data: vehicle,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(vehicle.location.longitude),
        parseFloat(vehicle.location.latitude),
      ],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={{
          lat: lat,
          lng: lng,
        }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <Cluster
                  mapRef={mapRef}
                  pointCount={pointCount}
                  points={points}
                  supercluster={supercluster}
                  cluster={cluster}
                  latitude={latitude}
                  longitude={longitude}
                />
              </Marker>
            );
          }

          return (
            <Marker
              key={`vehicle-${cluster.properties.vehicleId}`}
              lat={latitude}
              lng={longitude}
            >
              <Vehicle data={cluster.properties.data} />
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
