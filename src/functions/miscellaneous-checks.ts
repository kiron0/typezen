// Check if the value is a even number: Example: isEven(5) => false
export const isEven = (value: number): boolean => value % 2 === 0;

// Check if the value is a odd number: Example: isOdd(5) => true
export const isOdd = (value: number): boolean => value % 2 !== 0;

// Check if the value is a prime number: Example: isPrime(5) => true
export const isPrime = (value: number): boolean => {
  if (value < 2) {
    return false;
  }
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

// Check if the value is a perfect number: Example: isPerfect(28) => true
// A perfect number is a positive integer that is equal to the sum of its proper divisors.
export const isPerfect = (value: number): boolean => {
  let sum = 0;
  for (let i = 1; i < value; i++) {
    if (value % i === 0) {
      sum += i;
    }
  }
  return sum === value;
};

// Check if the value is a palindrome: Example: isPalindrome(121) => true
// A palindrome is a number that remains the same when its digits are reversed.
export const isPalindrome = (value: number): boolean => {
  return value === Number(value.toString().split("").reverse().join(""));
};

// Check if the value is a armstrong number: Example: isArmstrong(153) => true
// An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
export const isArmstrong = (value: number): boolean => {
  const digits = value.toString().split("");
  const n = digits.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Number(digits[i]) ** n;
  }
  return sum === value;
};

// Check if the value is a perfect square: Example: isPerfectSquare(25) => true
// A perfect square is a number that can be expressed as the product of two equal integers.
export const isPerfectSquare = (value: number): boolean => {
  return Math.sqrt(value) % 1 === 0;
};

// Check if the value is a fibonacci number: Example: isFibonacci(5) => true
// A Fibonacci number is a number that is the sum of the two preceding ones, starting from 0 and 1.
export const isFibonacci = (value: number): boolean => {
  return (
    isPerfectSquare(5 * value ** 2 + 4) || isPerfectSquare(5 * value ** 2 - 4)
  );
};

// Check if the value is a factorial number: Example: isFactorial(120) => true
// A factorial number is a number that is the product of all positive integers less than or equal to the number.
export const isFactorial = (value: number): boolean => {
  let i = 1;
  let factorial = 1;
  while (factorial < value) {
    i++;
    factorial *= i;
  }
  return factorial === value;
};

// Check if the value is a leap year: Example: isLeapYear(2020) => true
// A leap year is a year that is exactly divisible by 4 except for years that are exactly divisible by 100 but these years are leap years if they are exactly divisible by 400.
export const isLeapYear = (value: number): boolean => {
  return value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0);
};

// Check if the value is a weekend: Example: isWeekend(new Date("2021-10-02")) => true
// Check if the value is a weekend: Example: isWeekend(new Date("2021-10-03")) => true
export const isWeekend = (value: Date): boolean => {
  return value.getDay() === 0 || value.getDay() === 6;
};

// Check if the value is a weekday: Example: isWeekday(new Date("2021-10-04")) => true
export const isWeekday = (value: Date): boolean => {
  return !isWeekend(value);
};

// Check if the value is a future date: Example: isFutureDate(new Date("2022-10-10")) => true
export const isFutureDate = (value: Date): boolean => {
  return value > new Date();
};

// Check if the value is a past date: Example: isPastDate(new Date("2020-10-10")) => true
export const isPastDate = (value: Date): boolean => {
  return value < new Date();
};

// Check if the value is today: Example: isToday(new Date()) => true
export const isToday = (value: Date): boolean => {
  return value.toDateString() === new Date().toDateString();
};

// Check if the value is yesterday: Example: isYesterday(new Date("2021-10-10")) => true
export const isYesterday = (value: Date): boolean => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return value.toDateString() === yesterday.toDateString();
};

// Check if the value is tomorrow: Example: isTomorrow(new Date("2021-10-10")) => true
export const isTomorrow = (value: Date): boolean => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return value.toDateString() === tomorrow.toDateString();
};

// Check if the value is a valid regular expression: Example: isValidRegExp(/test/g) => true
export const isValidRegExp = (regex: unknown): boolean => {
  return regex instanceof RegExp;
};
