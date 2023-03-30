import React from "react";
import"./Tabla.css"

const data = {
  "Ciudad Victoria, México": 953,
  "Naucalpan de Juárez, Estado de México, México": 956,
  "Zacatecas, México": 965,
  "Ensenada, Península de Baja California, México": 1012,
  "Ciudad Obregón, Sonora, Mexico": 1071,
  "Cuernavaca, Morelos, México": 1096,
  "Nuevo Laredo, México": 1127,
  "Nezahualcóyotl, Estado de México, México": 1150,
  "Acapulco de Juárez, México": 1176,
  "Apodaca, Nuevo León, México": 1205,
  "Los Mochis, Sinaloa, México": 1262,
  "Tuxtla Gutiérrez, Chiapas, México": 1303,
  "Xalapa-Enríquez, Veracruz de Ignacio de la Llave, México": 1322,
  "Mazatlán, Sinaloa, México": 1351,
  "Cancún, México": 1355,
  "Heroica Matamoros, México": 1375,
  "Tampico, México": 1392,
  "Pachuca de Soto, México": 1447,
  "Victoria de Durango, México": 1589,
  "Zapopan, Jalisco, México": 1613,
  "Tepic, México": 1616,
  "Oaxaca de Juárez, México": 1688,
  "Veracruz, Veracruz de Ignacio de la Llave, México": 1776,
  "Saltillo, México": 1778,
  "Villahermosa, México": 1892,
  "Torreón, México": 1988,
  "Querétaro, México": 2005,
  "Reynosa, México": 2007,
  "Ecatepec de Morelos, Estado de México, México": 2051,
  "Morelia, México": 2131,
  "Mérida, México": 2172,
  "Hermosillo, Sonora, México": 2190,
  "Culiacán, Sinaloa, México": 2229,
  "Aguascalientes, México": 2273,
  "Mexicali, Península de Baja California, México": 2370,
  "Toluca de Lerdo, Estado de México, México": 2580,
  "San Luis Potosí, México": 2646,
  "Chihuahua, México": 2711,
  "León, México": 2756,
  "Monterrey, Nuevo León, México": 2858,
  "Tijuana, Península de Baja California, México": 2956,
  "Ciudad Juárez, México": 3201,
  "Puebla de Zaragoza, México": 3871,
  "Guadalajara, Jalisco, México": 3970,
  "Ciudad de México, México": 20706,
};

const sortedData = Object.entries(data).sort(([, a], [, b]) => b - a);

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
        {sortedData.map(([ciudad, valor], index) => (
          <tr key={ciudad} className={index % 2 === 0 ? "fila-roja" : "fila-blanca"}>
            <td>{ciudad}</td>
            <td>{valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
