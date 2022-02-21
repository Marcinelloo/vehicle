import { useContext, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "../components/home/Map";
import { getData } from "../redux/actions/dataActions";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import Logo from "../components/navbar/navbarElements/Logo";
import BasicStats from "../components/navbar/navbarElements/BasicStats";
import Filter from "../components/navbar/navbarElements/Filter";
import { FilterContext } from "../components/FilterContext";
import filterData from "../functions/filterData";
import LoadingSpiner from "../components/Loading";

const Wraper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0ece3;
`;

const MapWraper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Home() {
  const dispatch = useDispatch();
  const { object, loading, error } = useSelector((state) => state.getData);
  const [data, setData] = useState(null);
  const { filter } = useContext(FilterContext);

  useLayoutEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (loading === false && object !== null && object !== undefined) {
      setData(filterData(object.objects, filter));
    }
  }, [loading, error, object]);

  useEffect(() => {
    if (object !== null && object !== undefined) {
      setData(filterData(object.objects, filter));
    }
  }, [filter]);

  return (
    <>
      {data ? (
        <MapWraper>
          <Navbar>
            <Logo />
            <BasicStats data={data} />
            <Filter />
          </Navbar>
          <Map data={data}></Map>{" "}
        </MapWraper>
      ) : (
        <Wraper>
          <LoadingSpiner />
        </Wraper>
      )}
    </>
  );
}

export default Home;
