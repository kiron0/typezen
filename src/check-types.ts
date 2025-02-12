export const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !Number.isNaN(value);

export const isInteger = (value: unknown): value is number =>
  Number.isInteger(value as number);

export const isFloat = (value: unknown): boolean =>
  isNumber(value) && !Number.isInteger(value);

export const isNaNValue = (value: unknown): boolean =>
  Number.isNaN(value as number);

export const isSymbol = (value: unknown): value is symbol =>
  typeof value === "symbol";

export const isBetween = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;

export const isPositive = (value: number): boolean => value > 0;
export const isNegative = (value: number): boolean => value < 0;

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

export const isObject = <T extends object>(value: unknown): value is T =>
  value !== null && typeof value === "object" && !Array.isArray(value);

export const isArray = <T>(value: unknown): value is T[] =>
  Array.isArray(value);

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isStringArray = (value: unknown): value is string[] =>
  isArray(value) && value.every((item) => isString(item));

export const isEmpty = (value: unknown): boolean => {
  if (isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  if (isString(value)) return value.trim() === "";
  if (isMap(value)) return value.size === 0;
  if (isSet(value)) return value.size === 0;
  return false;
};

export const isPromise = <T>(value: unknown): value is Promise<T> =>
  value instanceof Promise;

export const isError = (value: unknown): value is Error =>
  value instanceof Error;

export const isMap = <K, V>(value: unknown): value is Map<K, V> =>
  value instanceof Map;

export const isSet = <T>(value: unknown): value is Set<T> =>
  value instanceof Set;

export const isFunction = (value: unknown): value is Function =>
  typeof value === "function";

export const isAsyncFunction = (value: unknown): boolean =>
  isFunction(value) && value.constructor.name === "AsyncFunction";

export const isPrimitive = (value: unknown): boolean =>
  value === null || (typeof value !== "object" && typeof value !== "function");

export const isHexColor = (value: string): boolean =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(value);

export const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isUUID = (value: string): boolean =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );

export const isBase64 = (value: string): boolean => {
  try {
    return Buffer.from(value, "base64").toString("base64") === value;
  } catch {
    return false;
  }
};
