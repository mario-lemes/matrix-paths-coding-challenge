import React, { Component } from 'react';
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

class AreaChart extends Component {
  render() {
    const { paths } = this.props;

    const data = paths.map(item => {
      return {
        file: item.fileSelected,
        executionTime: item.executionTime,
      };
    });

    return (
      <div className="chart">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{ top: 30, right: 5, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="file" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="executionTime" stroke="#00b5ad" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default AreaChart;
