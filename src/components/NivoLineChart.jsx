import React from 'react';
import { ResponsiveLine } from '@nivo/line';

function NivoLineChart() {
  const data = [
    {
      'id': 'Formica',
      color:"yellow",
      data: [
        { x: 0, y: 100 },
        { x: 1, y: 25 },
        { x: 2, y: 15 },
        { x: 3, y: 25 },
        { x: 4, y: 30 },
      ],
    },
    {
      'id': 'ralph wilson',
      data: [
        { x: 0, y: 20 },
        { x: 1, y: 100 },
        { x: 2, y: 30 },
        { x: 3, y: 35 },
        { x: 4, y: 40 },
      ],
    },
  ];
  

  return (
    <div style={{ height: '500px' ,width:'900px'}}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Eje X',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Eje Y',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        lineWidth={5}
        enablePoints={true}
        enableArea={true}
        areaOpacity={0.2}
        enableGridX={false}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        curve={'natural'}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: 'circle',
            onClick: (data) => console.log('legends', data),
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default NivoLineChart;
