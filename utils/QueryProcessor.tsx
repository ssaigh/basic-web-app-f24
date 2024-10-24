export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "ssaigh";
  }

  if (query.includes("What is your name?")) {
    return "Salman";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const largest = Math.max(...numbers.map(Number));
      return largest.toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const sum = Number(numbers[0]) + Number(numbers[1]);
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const product = Number(numbers[0]) * Number(numbers[1]);
      return product.toString();
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const sixthPowers = numbers.filter((num) => {
        const root = Math.round(Math.pow(Number(num), 1 / 6));
        return Math.pow(root, 6) === Number(num);
      });
      return sixthPowers.join(", ") || "None";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const primes = numbers.filter((num) => {
        const number = Number(num);
        if (number < 2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      return primes.join(", ") || "None";
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const difference = Number(numbers[0]) - Number(numbers[1]);
      return difference.toString();
    }
  }

  if (query.toLowerCase().includes("to the power of")) {
    const numbers = query.match(/\d+/g); // Extract the numbers from the query
    if (numbers && numbers.length === 2) {
      const result = Math.pow(Number(numbers[0]), Number(numbers[1])); // Perform the power calculation
      return result.toString(); // Return the result as a string
    }
  }

  return "";
}
