import { fetchCurrentWeather, FetchCurrentWeatherProps } from "@acme/shared";
import { useQuery } from "@tanstack/react-query";

export default function useWeatherQuery({
  cityName,
  latitude,
  longitude,
  // TODO: Implement with global state and storage (user settings)
  language = "en",
  // TODO: Implement with global state and storage (user settings)
  units = "metric",
}: FetchCurrentWeatherProps) {
  // Fetch weather data from OpenWeatherMap API
  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather", cityName, latitude, longitude, language, units],
    queryFn: async () => {
      if (typeof cityName === "string")
        return await fetchCurrentWeather({
          cityName,
          language,
          units,
        });
      if (typeof latitude === "number" && typeof longitude === "number")
        return await fetchCurrentWeather({
          latitude,
          longitude,
          language,
          units,
        });
      throw new Error("Invalid arguments");
    },
  });

  return { data, isLoading, isError };
}
