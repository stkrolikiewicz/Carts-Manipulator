import React, { FunctionComponent, PureComponent } from 'react'
import { Product } from '@/models'
import { CartesianGrid, Label, LabelList, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from './ProductCard.module.css'

type Props = {
  data: Product[]
}

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="start"
        fill="#666"
        transform="rotate(30)"
      >
        {payload.value.slice(0, 6)}{payload.value.length > 6 ? '...' : null}
      </text>
    </g>
  );
};

const Chart = ({ data }: Props) => {
  const dataMapped = data.map((item: Product) => {
    return {
      name: item.title,
      p: item.price,
      dp: Number((item.discountedPrice / item.quantity).toFixed(2)),
    }
  })

  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <LineChart data={dataMapped}>
        <XAxis dataKey="name" height={100} tick={<CustomizedAxisTick />} >
          <Label value="Products" position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'price', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Legend margin={{ top: 10, bottom: 10 }} />
        <Tooltip />
        <Line type="monotone" dataKey="p" name="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="dp" name="discounted price" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart