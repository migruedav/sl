import React from 'react';
import { Chart } from 'react-google-charts';

function GeoChart() {
  const chartData = [['Estado', 'Score'],
  ['Aguascalientes', 61],
  ['Baja California', 18],
  ['Baja California Sur', 4],
  ['Campeche', 79],
  ['Chiapas', 93],
  ['Chihuahua', 48],
  ['Coahuila', 12],
  ['Colima', 70],
  ['Distrito Federal', 5],
  ['Durango', 13],
  ['Guanajuato', 12],
  ['Guerrero', 88],
  ['Hidalgo', 3],
  ['Jalisco', 55],
  ['México', 76],
  ['Michoacán', 1],
  ['Morelos', 69],
  ['Nayarit', 18],
  ['Nuevo León', 54],
  ['Oaxaca', 62],
  ['Puebla', 64],
  ['Querétaro', 18],
  ['Quintana Roo', 3],
  ['San Luis Potosí', 70],
  ['Sinaloa', 42],
  ['Sonora', 50],
  ['Tabasco', 93],
  ['Tamaulipas', 2],
  ['Tlaxcala', 86],
  ['Veracruz', 5],
  ['Yucatán', 62],
  ['Zacatecas', 27]]

  const options = {
    region: 'MX',
    resolution: 'provinces',
    colorAxis: { colors: ['#ff0000', '#e60000', '#cc0000', '#b30000', '#990000', '#800000'] },
    tooltip: {
      isHtml: true // Establece el tooltip como HTML
  }
  };

  return (
    <Chart
      chartType="GeoChart"
      data={chartData}
      options={options}
      width="800px"
      height="400px"
    />
  );
}

export default GeoChart;
