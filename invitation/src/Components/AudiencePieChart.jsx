import { PieChart, Pie, Cell, Tooltip } from "recharts";

const audienceData = [
  {
    name: `83% are between ages 20-35
years, 17% others`,
    value: 83,
    color: "#FF5733",
  },
  { name: `72% male, 28% female`, value: 72, color: "#33FF57" },
  {
    name: `68% has a bachelor’s, 6% has
masters, 26% others
`,
    value: 68,
    color: "#3357FF",
  },
  {
    name: `45% are employed, 15%
freelancers, 18% students,
22% unemployed`,
    value: 45,
    color: "#FF33A1",
  },
  {
    name: `70% career growth, 60%
needs certification, 80%
Networking & colaboration
`,
    value: 80,
    color: "#FFB533",
  },
  {
    name: `98% Open for international
opportunities
`,
    value: 98,
    color: "#A133FF",
  },
];

const CustomLegend = ({ data }) => (
  <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
    {data.map((entry, index) => (
      <div
        key={index}
        style={{ display: "flex", alignItems: "center", marginBottom: 5 }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            backgroundColor: entry.color,
            borderRadius: "50%",
            marginRight: 8,
          }}
        ></div>
        <span style={{ fontSize: 14 }}>{entry.name}</span>
      </div>
    ))}
  </div>
);

export default function AudienceDonutChart() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <PieChart width={400} height={400}>
        <Pie
          data={audienceData}
          cx='50%'
          cy='50%'
          innerRadius={90}
          outerRadius={150}
          label={false}
          labelLine={false}
          dataKey='value'
        >
          {audienceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      {/* Custom Legend */}
      <CustomLegend data={audienceData} />
    </div>
  );
}
