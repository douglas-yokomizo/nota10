import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface Props {
  data: { name: string; value: number; color: string }[];
  domain?: [number, number];
}

export const BarChartVerticalReusable = ({
  data,
  domain = [0, 100],
}: Props) => (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={domain} />
        <YAxis dataKey="name" type="category" width={100} />
        <Tooltip
          formatter={(value: number | string) => [`${value}%`, "Pontuação"]}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`bar-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);
