import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Spot from "./Spot";
import "../spots.css";

const Spots = ({ spots }) => {
  const [spotList, setSpotList] = useState([]);
  const [skip, setSkip] = useState(30);
  const [countinu, setCountinue] = useState(true);
  const params = useParams();

  const urlPath =
    "/v2/Tourism/ScenicSpot" +
    (Object.keys(params).length !== 0 ? "/" + params.city : "");
  const urlQuery = "?$top=30&$format=JSON";
  const urlQuerySkip = `?$top=30&$skip=${skip}&$format=JSON`;

  useEffect(async () => {
    const data = await fetchFirstData();
    setSpotList(data);
  }, [params]);

  const fetchFirstData = async () => {
    const res = await fetch(
      process.env.REACT_APP_API_PATH + urlPath + urlQuery
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const res = await fetch(
      process.env.REACT_APP_API_PATH + urlPath + urlQuerySkip
    );
    const data = await res.json();
    setSpotList([...spotList, ...data]);
    setSkip(skip + 30);
  };

  const init = async () => {
    setSpotList([]);
    setSkip(0);
    setCountinue(true);
    const data = await fetchFirstData();
    setSpotList(data);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={spotList.length} //This is important field to render the next data
        next={fetchData}
        hasMore={countinu}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={init}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        <div class="spots">
          {spotList.map((spot) => (
            <div key={spot.ID} className="spot">
              <Spot spot={spot} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Spots;
