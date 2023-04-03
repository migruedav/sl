import React from "react";
import "./Tabla.css";
import { Orbit } from "@uiball/loaders";

const data = [
  ["Ciudad de México, México", 20694],
  ["Guadalajara, Jalisco, México", 3967],
  ["Puebla de Zaragoza, México", 3858],
  ["Ciudad Juárez, México", 3219],
  ["Tijuana, Península de Baja California, México", 2956],
  ["Monterrey, Nuevo León, México", 2853],
  ["León, México", 2762],
  ["Chihuahua, México", 2727],
  ["San Luis Potosí, México", 2654],
  ["Toluca de Lerdo, Estado de México, México", 2593],
  ["Mexicali, Península de Baja California, México", 2381],
  ["Aguascalientes, México", 2269],
  ["Culiacán, Sinaloa, México", 2231],
  ["Hermosillo, Sonora, México", 2206],
  ["Mérida, México", 2177],
  ["Morelia, México", 2136],
  ["Ecatepec de Morelos, Estado de México, México", 2035],
  ["Reynosa, México", 2005],
  ["Torreón, México", 1999],
  ["Querétaro, México", 1992],
  ["Villahermosa, México", 1893],
  ["Veracruz, Veracruz de Ignacio de la Llave, México", 1788],
  ["Saltillo, México", 1781],
  ["Oaxaca de Juárez, México", 1688],
  ["Zapopan, Jalisco, México", 1624],
  ["Tepic, México", 1621],
  ["Victoria de Durango, México", 1589],
  ["Pachuca de Soto, México", 1451],
  ["Tampico, México", 1408],
  ["Heroica Matamoros, México", 1377],
  ["Cancún, México", 1351],
  ["Mazatlán, Sinaloa, México", 1350],
  ["Xalapa-Enríquez, Veracruz de Ignacio de la Llave, México", 1328],
  ["Tuxtla Gutiérrez, Chiapas, México", 1313],
  ["Los Mochis, Sinaloa, México", 1263],
  ["Apodaca, Nuevo León, México", 1230],
  ["Acapulco de Juárez, México", 1183],
  ["Nezahualcóyotl, Estado de México, México", 1158],
  ["Nuevo Laredo, México", 1135],
  ["Cuernavaca, Morelos, México", 1094],
  ["Ciudad Obregón, Sonora, Mexico", 1064],
  ["Ensenada, Península de Baja California, México", 1022],
  ["Ciudad Victoria, México", 960],
  ["Zacatecas, México", 960],
  ["Naucalpan de Juárez, Estado de México, México", 957],
];

const Tabla = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ciudad</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([ciudad, valor], index) => (
          <tr
            key={ciudad}
            className={index % 2 === 0 ? "fila-roja" : "fila-blanca"}
          >
            <td>{ciudad}</td>
            <td>{valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
