'use client'

import { useEffect, useState } from "react"

export default function Weather() {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    fetch('https://localhost:5001/weatherforecast')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((err) => console.error(err));
  };

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No forecast data</p>

  return (
    <div className="container">
      <div className="row">
        <button onClick={fetchWeather}>Fetch new data</button>
      </div>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Summary</th>
              <th>Temp. C</th>
              <th>Temp. F</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => {
              return (<tr>
                <td>
                  {d.date}
                </td>
                <td>
                  {d.summary}
                </td>
                <td>
                  {d.temperatureC}
                </td>
                <td>
                  {d.temperatureF}
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>      
    </div>
  )
}