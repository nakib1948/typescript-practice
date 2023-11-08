{
  type numOrStr = number | string;
  const numberOrString = (param: numOrStr): number => {
    if (typeof param === "number") return param * param;
    else if (typeof param === "string") return param.length;
    else {
      throw new Error("Wrong input");
    }
  };
}

{
  interface Person {
    address?: {
      city: string;
      street: string;
    };
    phone?: string;
  }

  const getAddressCity = (city: Person): string | undefined => {
    return city?.address?.city;
  };
}

{
  class Cat {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
  }
  const isCat = (animal: any): string => {
    if (animal instanceof Cat) return "yes, it's a cat.";
    else return "no, it's not a cat.";
  };
}

{
  type arr = Array<number | string>;
  const sumOfNumbers = (mixedData: arr): number => {
    let sum: number = 0;
    mixedData.forEach((element) => {
      if (typeof element === "number") sum += element;
    });

    return sum;
  };
}

{
  interface Car {
    make: string;
    model: string;
    year: number;
  }

  interface Driver {
    name: string;
    licenseNumber: string;
  }

  const carAndDriver = (car: Car, driver: Driver) => {
    return { ...car, ...driver };
  };
}

{
  const totalSum = (arr: unknown): void => {
    if (Array.isArray(arr)) {
      let sum: number = 0;
      let allValueIsNumber: boolean = true;
      for (let element of arr) {
        if (typeof element === "number") sum += element;
        else {
          allValueIsNumber = false;
          break;
        }
      }
      if (allValueIsNumber) console.log(sum);
      else console.error("error!! all element in array should be number");
    } else console.error("error!! Please input an array");
  };
}

{
  const findFirstOccurrence = <T>(arr: T[], key: T): number => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        return i;
      }
    }
    return -1;
  };

  const numbers: number[] = [1, 2, 3, 4, 5, 2];

  const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
  const targetNumber = 2;
  const targetNumber1 = 22;

  const targetString = "cherry";
  const targetString1 = "cherrdfdfy";
  const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
  const indexInNumbers1 = findFirstOccurrence(numbers, targetNumber1);

  const indexInStrings = findFirstOccurrence(strings, targetString);
  const indexInStrings1 = findFirstOccurrence(strings, targetString1);

  console.log(indexInNumbers);
  console.log(indexInNumbers1);
  console.log(indexInStrings);
  console.log(indexInStrings1);
}
