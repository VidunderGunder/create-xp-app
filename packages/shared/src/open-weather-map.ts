import { z } from "zod";

export type FetchCurrentWeatherProps = {
  apiKey?: string;
  language?: Language;
  units?: Units;
  cityName?: string;
  latitude?: number;
  longitude?: number;
};

export async function fetchCurrentWeather({
  latitude,
  longitude,
  /**
   * latitude and longitude will override cityName
   */
  cityName,
  language = "en",
  units = "metric",
  apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY ?? "",
}: FetchCurrentWeatherProps): Promise<Weather> {
  try {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", apiKey);
    if (typeof latitude === "number" && typeof longitude === "number") {
      // do nothing <3
    } else if (typeof cityName === "string") {
      try {
        const geocode = await fetchCoordinatesByLocationName({
          name: cityName,
          apiKey,
        });
        if (
          geocode === undefined ||
          geocode[0] === undefined ||
          geocode[0].lat === undefined ||
          geocode[0].lon === undefined
        )
          throw new Error("No coordinates found");
        latitude = geocode[0].lat;
        longitude = geocode[0].lon;
      } catch (error) {
        throw new Error("Could not find coordinates for city name");
      }
    } else {
      throw new Error("Either latitude and longitude or cityName must be set");
    }
    url.searchParams.append("lat", latitude.toString());
    url.searchParams.append("lon", longitude.toString());
    url.searchParams.append("lang", language);
    url.searchParams.append("units", units);
    const response = await fetch(url.toString().replace("/?", "?"));
    const data = await response.json();
    const dataIsValid = Weather.safeParse(data).success;
    const validData = Weather.parse(data);
    if (!dataIsValid)
      console.warn("Weather data does not satisfy schema", data);
    return validData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const Units = z.enum(["standard", "metric", "imperial"]);
export type Units = z.infer<typeof Units>;

export const Weather = z
  .object({
    coord: z.object({
      lon: z.number(),
      lat: z.number(),
    }),
    weather: z.array(
      z.object({
        id: z.number(),
        main: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    ),
    base: z.string(),
    main: z.object({
      temp: z.number(),
      feels_like: z.number(),
      temp_min: z.number(),
      temp_max: z.number(),
      pressure: z.number(),
      humidity: z.number(),
      sea_level: z.number(),
      grnd_level: z.number(),
    }),
    visibility: z.number(),
    wind: z.object({
      speed: z.number(),
      deg: z.number(),
      gust: z.number(),
    }),
    rain: z.object({
      "1h": z.number(),
      "3h": z.number(),
    }),
    snow: z.object({
      "1h": z.number(),
      "3h": z.number(),
    }),
    clouds: z.object({
      all: z.number(),
    }),
    dt: z.number(),
    sys: z.object({
      type: z.number(),
      id: z.number(),
      country: z.string(),
      sunrise: z.number(),
      sunset: z.number(),
    }),
    timezone: z.number(),
    id: z.number(),
    name: z.string(),
    cod: z.number(),
  })
  .deepPartial();
export type Weather = z.infer<typeof Weather>;

export const Geocode = z
  .object({
    lat: z.number(),
    lon: z.number(),
    country: z.string(),
    local_names: z.record(z.string(), z.string()),
    name: z.string(),
    state: z.string(),
  })
  .deepPartial();
export type Geocode = z.infer<typeof Geocode>;
export const Geocodes = z.array(Geocode);
export type Geocodes = z.infer<typeof Geocodes>;

export async function fetchCoordinatesByLocationName({
  name,
  apiKey,
}: {
  name: string;
  apiKey: string;
}): Promise<Geocode[]> {
  const url = new URL("https://api.openweathermap.org/geo/1.0/direct");
  url.searchParams.append("q", name);
  url.searchParams.append("appid", apiKey);
  try {
    const response = await fetch(url.toString().replace("/?", "?"));
    const data = await response.json();
    const dataSatisfiesSchema = Geocodes.safeParse(data);
    if (!dataSatisfiesSchema.success) {
      console.warn("Geocode data does not satisfy schema", data);
      return [];
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const unitSymbols: Record<Units, string> = {
  standard: "K",
  metric: "°C",
  imperial: "°F",
};

export const Language = z.enum([
  "af",
  "al",
  "ar",
  "az",
  "bg",
  "ca",
  "cz",
  "da",
  "de",
  "el",
  "en",
  "eu",
  "fa",
  "fi",
  "fr",
  "gl",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "kr",
  "la",
  "lt",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt_br",
  "ro",
  "ru",
  "sv",
  "sk",
  "sl",
  "sp",
  "sr",
  "th",
  "tr",
  "ua",
  "vi",
  "zh_cn",
  "zh_tw",
  "zu",
]);
export type Language = z.infer<typeof Language>;
