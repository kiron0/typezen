// Check if the value is a weak map: Example: isWeakMap(new WeakMap()) => true
export const isWeakMap = (value: unknown): boolean => value instanceof WeakMap;

// Check if the value is a weak set: Example: isWeakSet(new WeakSet()) => true
export const isWeakSet = (value: unknown): boolean => value instanceof WeakSet;

// Check if the value is an iterable: Example: isIterable([1, 2, 3]) => true
export const isIterable = (value: unknown): boolean =>
  typeof value === "object" && value !== null && Symbol.iterator in value;

// Check if the value is an async iterable: Example: isAsyncIterable(new AsyncGenerator()) => true
export const isAsyncIterable = (value: unknown): boolean =>
  typeof value === "object" && value !== null && Symbol.asyncIterator in value;

// Check if the value is a typed array: Example: isTypedArray(new Int8Array()) => true
export const isTypedArray = (value: unknown): boolean =>
  ArrayBuffer.isView(value);

// Check if the value is an array buffer: Example: isArrayBuffer(new ArrayBuffer()) => true
export const isArrayBuffer = (value: unknown): boolean =>
  value instanceof ArrayBuffer;

// Check if the value is a data view: Example: isDataView(new DataView(new ArrayBuffer())) => true
export const isDataView = (value: unknown): boolean =>
  value instanceof DataView;

// Check if the value is a shared array buffer: Example: isSharedArrayBuffer(new SharedArrayBuffer()) => true
export const isSharedArrayBuffer = (value: unknown): boolean =>
  value instanceof SharedArrayBuffer;

// Check if the value is a buffer: Example: isBuffer(Buffer.from("Hello")) => true
export const isBuffer = (value: unknown): boolean => value instanceof Buffer;

// Check for undefined
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

// Check for null
export function isNull(value: unknown): value is null {
  return value === null;
}

// Check for null or undefined
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value == null;
}

// Check for plain object literals (not arrays, dates, etc.)
export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === "[object Object]";
}

// Check for empty
export const isEmpty = (value: unknown): boolean =>
  value == null || value === "" || value !== value;

// Check for empty array
export function isEmptyArray(value: unknown): boolean {
  return Array.isArray(value) && value.length === 0;
}

// Check for empty string
export function isEmptyString(value: unknown): boolean {
  return typeof value === "string" && value.trim().length === 0;
}

// Check for negative zero
export function isNegativeZero(value: unknown): boolean {
  return value === 0 && 1 / value === -Infinity;
}

// Check for Infinity/-Infinity
export function isInfinity(value: unknown): boolean {
  return value === Infinity || value === -Infinity;
}

// Check for a thenable (promise-like object)
export function isThenable(value: unknown): value is PromiseLike<unknown> {
  return Boolean(value && typeof (value as any).then === "function");
}

// Check for valid domain name
export function isDomain(value: string): boolean {
  return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,6}$/i.test(value);
}

// Check for valid semantic version
export function isSemVer(value: string): boolean {
  return /^\d+\.\d+\.\d+(-[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?(\+[0-9A-Za-z-]+)?$/.test(
    value,
  );
}

// Check for empty object
export function isEmptyObject(value: unknown): boolean {
  return isPlainObject(value) && Object.keys(value).length === 0;
}

// Check for Class constructor
export function isClass(value: unknown): boolean {
  return (
    typeof value === "function" &&
    /^class\s/.test(Function.prototype.toString.call(value))
  );
}

// Check for EventEmitter (Node.js)
export function isEventEmitter(value: unknown): value is NodeJS.EventEmitter {
  return Boolean(
    value &&
      typeof (value as any).on === "function" &&
      typeof (value as any).emit === "function",
  );
}

// Check for valid MIME type
export function isMimeType(value: string): boolean {
  return /^(?:application|audio|font|example|image|message|model|multipart|text|video)\/[a-z0-9-+]+$/i.test(
    value,
  );
}

// Check for valid URL protocol (HTTPS)
export function isHTTPS(value: string): boolean {
  return value.startsWith("https://");
}

// Check for iterators
export function isMapIterator(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object Map Iterator]";
}

export function isSetIterator(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object Set Iterator]";
}

// Check for safe integer
export function isSafeInteger(value: unknown): value is number {
  return Number.isSafeInteger(value);
}
