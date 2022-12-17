import {
  fetchCoordinatesByLocationName,
  fetchCurrentWeather,
  Geocodes,
  Weather,
} from "./open-weather-map";

const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY ?? "";

describe("apiKey", () => {
  it("is defined", () => {
    expect(apiKey).toBeDefined();
    expect(apiKey).not.toBe("");
  });
});

describe("fetchCoordinatesByLocationName", () => {
  it("doesn't crash", async () => {
    await fetchCoordinatesByLocationName({
      apiKey,
      name: "London",
    });
  });
  it("match expected output", async () => {
    const geocode = await fetchCoordinatesByLocationName({
      apiKey,
      name: "London",
    });
    expect(Array.isArray(geocode)).toBe(true);
    expect(geocode.length > 0).toBe(true);
    expect(Geocodes.safeParse(geocode).success).toBe(true);
  });
});

describe("fetchCurrentWeather", () => {
  it("returns 401 for invalid API-key", async () => {
    const weather = await fetchCurrentWeather({
      apiKey: "invalid-api-key",
      latitude: 51.5074,
      longitude: 0.1278,
    });
    expect(weather.cod).toBe(401);
  });
  it("doesn't crash by name", async () => {
    await fetchCurrentWeather({
      apiKey,
      cityName: "London",
    });
  });
  it("doesn't crash by coordinates", async () => {
    await fetchCurrentWeather({
      apiKey,
      latitude: 51.5074,
      longitude: 0.1278,
    });
  });
  it("match expected respone keys and types by name", async () => {
    const weather = await fetchCurrentWeather({
      apiKey,
      cityName: "London",
    });
    const isValid = Weather.safeParse(weather).success;
    expect(isValid).toBe(true);
  });
  it("match expected respone keys and types by coordinates", async () => {
    const weather = await fetchCurrentWeather({
      apiKey,
      latitude: 51.5074,
      longitude: 0.1278,
    });
    const isValid = Weather.safeParse(weather).success;
    expect(isValid).toBe(true);
  });
});
