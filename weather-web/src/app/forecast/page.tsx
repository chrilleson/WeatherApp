'use client'

import { useEffect, useState } from "react"

import { useForecast } from "@/lib/hooks/useWeatherForecast";

export default function Weather() {
  const [data, setData] = useState<any[]>([])  
  const { forecast, isLoading, error, mutate } = useForecast();

  useEffect(() => {
    setData(forecast);
  }, [forecast]);

  const fetchWeather = () => {    
    mutate().then(res => setData(res));       
  };

  if (isLoading) return <p>Loading...</p>
  if (!!error) return <p>Something went wrong.</p>
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
            {data.map((d,i) => {
              return (
              <tr key={i}>
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