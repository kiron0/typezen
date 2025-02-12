// Check if the value is a number: Example: isNumber(5) => true
export const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !Number.isNaN(value);

// Check if the value is an integer: Example: isInteger(5) => true
export const isInteger = (value: unknown): value is number =>
  Number.isInteger(value as number);

// Check if the value is a float: Example: isFloat(5.5) => true
export const isFloat = (value: unknown): boolean =>
  isNumber(value) && !Number.isInteger(value);

// Check if the value is NaN: Example: isNaNValue(NaN) => true
export const isNaNValue = (value: unknown): boolean =>
  Number.isNaN(value as number);

// Check if the value is between a range: Example: isBetween(5, 1, 10) => true
export const isBetween = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;

// Check if the value is positive: Example: isPositive(5) => true
export const isPositive = (value: number): boolean => value > 0;

// Check if the value is negative: Example: isNegative(-5) => true
export const isNegative = (value: number): boolean => value < 0;

// Check if the value is a boolean: Example: isBoolean(true) => true
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

// Check if the value is an object: Example: isObject({}) => true
// Check if the value is an object: Example: isObject({ name: "John" }) => true
export const isObject = <T extends object>(value: unknown): value is T =>
  value !== null && typeof value === "object" && !Array.isArray(value);

// Check if the value is an array: Example: isArray([1, 2, 3]) => true
// Check if the value is an array: Example: isArray([]) => true
export const isArray = <T>(value: unknown): value is T[] =>
  Array.isArray(value);

// Check if the value is a string: Example: isString("Hello") => true
export const isString = (value: unknown): value is string =>
  typeof value === "string";

// Check if the value is an array of strings: Example: isArrayOfSting(["Hello"]) => true
// Check if the value is an array of strings: Example: isArrayOfSting(["Hello", "World"]) => true
export const isArrayOfSting = (value: unknown): value is string[] =>
  isArray(value) && value.every((item) => isString(item));

// Check if the value is a promise: Example: isPromise(Promise.resolve(5)) => true
export const isPromise = <T>(value: unknown): value is Promise<T> =>
  value instanceof Promise;

// Check if the value is an error: Example: isError(new Error("Error")) => true
export const isError = (value: unknown): value is Error =>
  value instanceof Error;

// Check if the value is a map: Example: isMap(new Map()) => true
export const isMap = <K, V>(value: unknown): value is Map<K, V> =>
  value instanceof Map;

// Check if the value is a set: Example: isSet(new Set()) => true
export const isSet = <T>(value: unknown): value is Set<T> =>
  value instanceof Set;

// Check if the value is a function: Example: isFunction(() => {}) => true
// Check if the value is a function: Example: isFunction(function() {}) => true
export const isFunction = (value: unknown): value is Function =>
  typeof value === "function";

// Check if the value is an async function: Example: isAsyncFunction(async () => {}) => true
// Check if the value is an async function: Example: isAsyncFunction(async function() {}) => true
export const isAsyncFunction = (value: unknown): boolean =>
  isFunction(value) && value.constructor.name === "AsyncFunction";

// Check if the value is a primitive: Example: isPrimitive(null) => true
// Check if the value is a primitive: Example: isPrimitive(5) => true
export const isPrimitive = (value: unknown): boolean =>
  value === null || (typeof value !== "object" && typeof value !== "function");

// Check if the value is a hexadecimal color: Example: isHex("#fff") => true
export const isHex = (value: string): boolean =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(value);

// Check if the value is an email: Example: isEmail("hello@example.com") => true
export const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Check if the value is a UUID: Example: isUUID("550e8400-e29b-41d4-a716-446655440000") => true
export const isUUID = (value: string): boolean =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );

// Check if the value is a base64 URL: Example: isBase64URL("aGVsbG8gd29ybGQ=") => true
export const isBase64URL = (value: string): boolean => {
  try {
    return Buffer.from(value, "base64").toString("base64") === value;
  } catch {
    return false;
  }
};

// Check if the value is a binary: Example: isBinary("Hello") => true
// Check if the value is a binary: Example: isBinary(Buffer.from("Hello")) => true
export const isBinary = (value: unknown): boolean =>
  typeof value === "string" || value instanceof Buffer;

export const isURL = (value: string): boolean => {
  try {
    const urlRegex = new RegExp(
      "^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*\\/?$",
      "i",
    );
    return urlRegex.test(value);
  } catch {
    return false;
  }
};

// Check if the value is a JSON Web Token (JWT): Example: isJWT
// ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c") => true
export const isJWT = (value: string): boolean => {
  try {
    const [header, payload, signature] = value.split(".");
    return [header, payload, signature].every(isBase64URL);
  } catch {
    return false;
  }
};

// Check if the value is a credit card: Example: isCreditCard("1234-1234-1234-1234") => true
export const isCreditCard = (value: string): boolean =>
  /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value);

// Check if the value is an ISBN: Example: isISBN("978-3-16-148410-0") => true
export const isISBN = (value: string): boolean =>
  /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(value);

// Check if the value is a MAC address: Example: isMACAddress("01:23:45:67:89:ab") => true
export const isMACAddress = (value: string): boolean =>
  /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value);

// Check if the value is an IP address: Example: isIPAddress("23.43.12.1") => true
// Check if the value is an IP address: Example: isIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334") => true
export const isIPAddress = (value: string): boolean =>
  /^([0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value) ||
  /^([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4})$/.test(value);

// Check if the value is a date: Example: isDate("2021-10-10") => true
export const isDate = (value: string): boolean => !isNaN(Date.parse(value));
