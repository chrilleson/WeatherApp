import { getForecast } from "../services/forecast.service";
import useSWR from "swr";

export function useForecast() {
  const { data, isLoading, error} = useSWR('', getForecast);

  return {
    forecast: data,
    isLoading,
    error
  }
}