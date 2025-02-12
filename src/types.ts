export type Primitive = string | number | boolean | symbol | null | undefined;

export type EmptyValue =
  | []
  | Record<string, never>
  | ""
  | Map<never, never>
  | Set<never>;

export class TypeValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TypeValidationError";
  }
}
