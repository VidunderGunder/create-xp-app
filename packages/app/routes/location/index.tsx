import { View, Text, styled } from "dripsy";
import { createParam } from "solito";
import MainLayout from "../../components/layouts/MainLayout";
import type { FetchCurrentWeatherProps } from "@acme/shared";
import useWeatherQuery from "../../hooks/useWeatherQuery";
import dayjs from "dayjs";
import type { ReactNode } from "react";
import { Platform } from "react-native";
import { MotiLink } from "solito/moti";

const DripsyMotiLink = styled(MotiLink)();

const { useParam } = createParam<{ location: string }>();

export function LocationScreen() {
  const [location] = useParam("location");
  const isCoordinates = location?.includes(",");
  const props: FetchCurrentWeatherProps = isCoordinates
    ? {
        latitude: Number(location?.split(",")[0]),
        longitude: Number(location?.split(",")[1]),
      }
    : { cityName: location };
  const { data, isLoading, isError } = useWeatherQuery(props);

  if (isLoading || isError) {
    return null;
  }

  if (isLoading) {
    return (
      <View
        sx={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Text sx={{ textAlign: "center" }}>Loading...</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View
        sx={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Text sx={{ textAlign: "center" }}>No location provided</Text>
      </View>
    );
  }

  const description = data?.weather?.[0]?.description;
  const temperature = data?.main?.temp;
  const tempHigh = data?.main?.temp_max;
  const tempLow = data?.main?.temp_min;

  const sunrise = data?.sys?.sunrise;
  const sunset = data?.sys?.sunset;
  const humidity = data?.main?.humidity;
  const visibility = data?.visibility;

  // TODO: Implement automatic K, °C or °F based on user settings
  const tempUnit = "°C";
  const mainTempUnit = temperature === undefined ? "" : tempUnit;

  return (
    <MainLayout noImage>
      <View
        sx={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <View
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            p: 3,
            zIndex: 1,
          }}
        >
          <DripsyMotiLink
            href={"/"}
            sx={{
              p: 12,
            }}
          >
            <Text
              sx={{
                color: "$white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              ↩️
            </Text>
          </DripsyMotiLink>
        </View>
        <Text
          sx={{
            pt: 3,
            textAlign: "center",
            fontSize: 36,
            fontWeight: "bold",
            color: "$white",
          }}
        >
          {data?.name ?? location}
        </Text>

        <View
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: ["column", "row"],
            width: ["100%", "100%"],
          }}
        >
          <View
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text
              sx={{
                textAlign: "center",

                fontSize: 12,
                color: "$white",
              }}
            >
              {description
                ? description[0]?.toUpperCase() + description.slice(1)
                : "No description"}
            </Text>
            <Text
              sx={{
                pt: 1,
                pb: 2,
                textAlign: "center",
                fontSize: 48,
                fontWeight: "bold",
                color: "$white",
              }}
            >
              {temperature?.toFixed() ?? "No temperature"}
              {mainTempUnit}
            </Text>
            <View
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                sx={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: 12,
                  color: "$white",
                }}
              >
                H: {tempHigh ?? "N/A"}
                {tempHigh ? tempUnit : ""}
                {" | "}L: {tempLow ?? "N/A"}
                {tempHigh ? tempUnit : ""}
              </Text>
            </View>
          </View>

          <Separator />

          <View
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <KeyValueCuties
                label="Sunrise"
                value={sunrise ? dayjs.unix(sunrise).format("HH:mm") : "N/A"}
              />
              <KeyValueCuties
                label="Sunset"
                value={sunset ? dayjs.unix(sunset).format("HH:mm") : "N/A"}
              />
            </View>
            <View
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <KeyValueCuties
                label="Humidity"
                value={
                  humidity !== undefined
                    ? `${humidity}%`
                    : humidity === undefined
                    ? ""
                    : "N/A"
                }
              />
              <KeyValueCuties
                label="Visibility"
                value={
                  <>
                    {visibility === undefined ? "" : ">"}
                    {typeof visibility === "number"
                      ? (visibility / 1000).toFixed(1)
                      : "N/A"}
                    {visibility === undefined ? "" : "km"}
                  </>
                }
              />
            </View>
          </View>
        </View>
      </View>
    </MainLayout>
  );
}

const Separator = ({ size = "10%" }) => {
  return (
    <View
      sx={{
        height: size,
        width: size,
      }}
    />
  );
};

const KeyValueCuties = ({
  label,
  value,
}: {
  label: ReactNode;
  value: ReactNode;
}) => {
  return (
    <View
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 100,
        height: 69,
      }}
    >
      <Text sx={{ fontSize: 12, color: "$white", pb: 1 }}>{label}:</Text>
      <Text
        sx={{
          fontSize: 24,
          fontWeight: "600",
          color: "$white",
        }}
      >
        {value}
      </Text>
    </View>
  );
};
