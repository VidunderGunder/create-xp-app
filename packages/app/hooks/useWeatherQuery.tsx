import { fetchCurrentWeather, FetchCurrentWeatherProps } from "@acme/shared";
import { useQuery } from "@tanstack/react-query";

/**
 * Fetch weather data from OpenWeatherMap API
 */
export default function useWeatherQuery({
  cityName,
  latitude,
  longitude,
  // TODO: Implement with global state and storage (user settings)
  language = "en",
  // TODO: Implement with global state and storage (user settings)
  units = "metric",
}: FetchCurrentWeatherProps) {
  const query = useQuery({
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
      console.warn(
        "Invalid arguments passed to useWeatherQuery. Make sure `cityName` or `latitude` and `longitude` is provided.",
      );
    },
    enabled:
      typeof cityName === "string" ||
      (typeof latitude === "number" && typeof longitude === "number"),
  });

  return query;
}
