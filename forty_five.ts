// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    // Process keyword arguments and add them to the car object
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Create a car object with required information and additional options
  const myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
  
  // Print the car object
  console.log(myCar);
  