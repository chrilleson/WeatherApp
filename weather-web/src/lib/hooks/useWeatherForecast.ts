import { getForecast } from "../services/forecast.service";
import useSWR from "swr";

export function useForecast() {
  const { data, isLoading, error, mutate} = useSWR('/weatherforecast', getForecast);

  return {
    forecast: data,
    isLoading,
    error,
    mutate
  }
}