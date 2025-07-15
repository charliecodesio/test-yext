import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ServiceStatus from "./components/ServiceStatus";
import "./styles.css";

type Service = { id: number; name: string };
type Status = { serviceId: number; status: number };
type StatusCode = { [key: string]: string };

interface ApiResponse {
  services: Service[];
  statuses: Status[];
  statusCodes: StatusCode;
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log("data:", data);
  useEffect(() => {
    fetch("http://localhost:3000/api/status")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        console.log("Fetched data:", json);
        setData(json);
        console.log("Data set:", json);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to load service data.");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!data || !data.services || !data.statuses || !data.statusCodes) {
    return <Loader />;
  }

  const services = data.services.map((service) => {
    const statusEntry = data.statuses.find((s) => s.serviceId === service.id);
    const statusCode = statusEntry ? statusEntry.status : 3;
    return {
      ...service,
      status: data.statusCodes[statusCode.toString()]
    };
  });

  services.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="app">
      <h1>Service Status Dashboard</h1>
      <div className="container">
        {services.map((s) => (
          <ServiceStatus key={s.id} name={s.name} status={s.status} />
        ))}
      </div>
    </div>
  );
}

export default App;
