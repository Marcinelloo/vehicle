export default function filterData(data, filter) {
  switch (filter) {
    case "AVAILABLE":
      return data.filter((vehicle) => vehicle.status === "AVAILABLE");
    case "DISABLE":
      return data.filter((vehicle) => vehicle.status === "DISABLE");
    case "50":
      return data.filter((vehicle) => vehicle.batteryLevelPct > 50);
    default:
      return data;
  }
}
