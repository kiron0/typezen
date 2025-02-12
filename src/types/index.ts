import { ImageFileExtension } from "../utils";

export class TypeValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TypeValidationError";
  }
}

export type ImageFileExtensionType = keyof typeof ImageFileExtension;
