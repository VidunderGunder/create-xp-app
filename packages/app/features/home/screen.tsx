import { FlashList } from "@shopify/flash-list";
import { Text, View } from "dripsy";
import WeatherCard, { isWheaterCardInput } from "../../components/WeatherCard";
import type { WheaterInputData } from "../../components/WeatherCard";
import useLocation from "../../hooks/useLocation";
import MainLayout from "../../components/layouts/MainLayout";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";

const exampleLocations: WheaterInputData[] = [
  { cityName: "Oslo" },
  { cityName: "London" },
  { cityName: "New York" },
  { cityName: "San Francisco" },
  { cityName: "Tokyo" },
  { latitude: 55.9139, longitude: 10.7522 },
];

export const HomeScreen = () => {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  useEffect(() => {
    const onResize = (event: { window: { width: number; height: number } }) => {
      setWidth(event.window.width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onResize);
    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  const colsBreakpoint = Array.from({ length: 10 }, (_, i) => (i + 1) * 500);
  let numColumns = colsBreakpoint.findIndex((col) => col > width) + 1;
  numColumns = numColumns === 0 ? colsBreakpoint.length : numColumns;

  const { location } = useLocation();

  const formattedLocation: Partial<WheaterInputData> = {
    latitude: location?.coords.latitude,
    longitude: location?.coords.longitude,
    title: "Your location",
  };

  const locations: WheaterInputData[] = isWheaterCardInput(formattedLocation)
    ? [formattedLocation, ...exampleLocations]
    : exampleLocations;

  return (
    <MainLayout>
      <Text
        sx={{
          color: "white",
          fontSize: 42,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 3,
          paddingBottom: 4,
        }}
      >
        Weather{" "}
        <Text
          sx={{
            color: "$primary",
          }}
        >
          App
        </Text>{" "}
        🌤
      </Text>
      <FlashList
        ItemSeparatorComponent={() => <View sx={{ height: 8 }} />}
        data={locations}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View
            sx={{
              width: `100%`,
              paddingRight: 2,
            }}
          >
            <WeatherCard {...item} />
          </View>
        )}
        estimatedItemSize={10}
      />
    </MainLayout>
  );
};
