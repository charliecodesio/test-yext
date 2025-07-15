import "./ServiceStatus.css";

interface Props {
  name: string;
  status: string;
}

const colorMap: Record<string, string> = {
  online: "green",
  degraded: "gold",
  offline: "red",
  maintenance: "gray"
};

const ServiceStatus = ({ name, status }: Props) => {
  return (
    <div className="service-row">
      <span className="service-name">{name}</span>
      <span className={`badge ${colorMap[status]}`}>{status}</span>
    </div>
  );
};

export default ServiceStatus;
