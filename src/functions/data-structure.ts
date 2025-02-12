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
