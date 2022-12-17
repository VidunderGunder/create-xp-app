import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import type { LocationObject } from "expo-location";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState<LocationObject>();
  const [isError, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      const location = await getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const isLoading = !location && !isError;

  return { location, isError, isLoading };
}
