const API_URL = "http://api.citybik.es/v2/networks/velo-antwerpen";

export const getStations = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.network.stations;
};

export const getStationById = async (id) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.network.stations.find((station) => station.id === id);
};