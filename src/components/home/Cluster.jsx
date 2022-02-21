import React from "react";
import styled from "styled-components";

const ClusterView = styled.div`
  color: white;
  font-size: 15px;
  opacity: 0.8;
  font-weight: bold;
  background: #8a1329;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const Cluster = ({
  mapRef,
  pointCount,
  points,
  supercluster,
  cluster,
  latitude,
  longitude,
}) => {
  return (
    <ClusterView
      style={{
        width: `${40 + (pointCount / points.length) * 20}px`,
        height: `${40 + (pointCount / points.length) * 20}px`,
      }}
      onClick={() => {
        const expansionZoom = Math.min(
          supercluster.getClusterExpansionZoom(cluster.id),
          30
        );
        mapRef.current.setZoom(expansionZoom);
        mapRef.current.panTo({ lat: latitude, lng: longitude });
      }}
    >
      {pointCount}
    </ClusterView>
  );
};

export default Cluster;
