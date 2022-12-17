import { celsiusToFahrenheit, fahrenheitToCelsius } from "./temperature";

const celciusAndFahrenheitPairs = [
  [0, 32],
  [100, 212],
  [-40, -40],
];

describe("celciusToFahrenheit", () => {
  test.each(celciusAndFahrenheitPairs)(
    "should convert %i celcius to %i fahrenheit",
    (celcius, fahrenheit) => {
      expect(celsiusToFahrenheit(celcius)).toBe(fahrenheit);
    },
  );
});

describe("fahrenheitToCelcius", () => {
  test.each(celciusAndFahrenheitPairs)(
    "should convert %i fahrenheit to %i celcius",
    (celcius, fahrenheit) => {
      expect(fahrenheitToCelsius(fahrenheit)).toBe(celcius);
    },
  );
});
