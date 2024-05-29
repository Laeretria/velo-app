import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StationDetail from "../../components/StationDetail";
import { fetchStationById } from "../../pages/api/Velo-api";

const Station = () => {
  const router = useRouter();
  const { id } = router.query;
  const [station, setStation] = useState(null);

  useEffect(() => {
    const getStation = async () => {
      if (id) {
        const stationData = await fetchStationById(id);
        setStation(stationData);
      }
    };
    getStation();
  }, [id]);

  if (!station) return <div>Loading...</div>;

  return (
    <div>
      <StationDetail station={station} />
    </div>
  );
};

export default Station;
