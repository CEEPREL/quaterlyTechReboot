import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState, useEffect } from "react";

const audienceData = [
  {
    name: `83% are between ages 20-35 years, 17% others`,
    value: 83,
    color: "#FF5733",
  },
  { name: `72% male, 28% female`, value: 72, color: "#33FF57" },
  {
    name: `68% has a bachelor’s, 6% has masters, 26% others`,
    value: 68,
    color: "#3357FF",
  },
  {
    name: `45% are employed, 15% freelancers, 18% students, 22% unemployed`,
    value: 45,
    color: "#FF33A1",
  },
  {
    name: `70% career growth, 60% needs certification, 80% Networking & collaboration`,
    value: 80,
    color: "#FFB533",
  },
  {
    name: `98% Open for international opportunities`,
    value: 98,
    color: "#A133FF",
  },
];

const CustomLegend = ({ data, isMobile }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "5px" : "10px",
      alignItems: isMobile ? "center" : "flex-start",
    }}
  >
    {data.map((entry, index) => (
      <div key={index} style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 12,
            height: 12,
            backgroundColor: entry.color,
            borderRadius: "50%",
            marginRight: 6,
          }}
        ></div>
        <span
          style={{ fontSize: "clamp(12px, 2vw, 14px)", textAlign: "center" }}
        >
          {entry.name}
        </span>
      </div>
    ))}
  </div>
);

export default function AudienceDonutChart() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [chartSize, setChartSize] = useState(
    window.innerWidth <= 768 ? 250 : 300
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
      setChartSize(window.innerWidth <= 768 ? 250 : 300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: isTablet ? "12px" : isMobile ? "8px" : "20px",
        textAlign: "center",
      }}
    >
      <PieChart width={chartSize} height={chartSize}>
        <Pie
          data={audienceData}
          cx='50%'
          cy='50%'
          innerRadius={isMobile ? 50 : 70}
          outerRadius={isMobile ? 100 : 120}
          label={false}
          labelLine={false}
          dataKey='value'
        >
          {audienceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
      <CustomLegend data={audienceData} isMobile={isMobile} />
    </div>
  );
}
