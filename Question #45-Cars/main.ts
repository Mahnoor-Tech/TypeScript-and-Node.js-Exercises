// 45- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type car = {
  manufacturer: string;
  model: string;
  [key: string]: any;
};

function car_info(
  manufacturer: string,
  model: string,
  optional_feature: Record<string, any>
): car {
  return {
    manufacturer,
    model,
    ...optional_feature,
  };
}

let car_details: car = car_info("Tesla", "Model S", {
  color: "white",
  year: "2024",
});

console.log(car_details);
