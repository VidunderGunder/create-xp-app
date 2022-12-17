export function celsiusToFahrenheit(celcius: number): number {
  return celcius * 1.8 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) / 1.8;
}
