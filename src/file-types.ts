import fs from "fs";

export const isBinary = (value: unknown): boolean =>
  typeof value === "string" || value instanceof Buffer;

export const isFileType = (filePath: string, format: string): boolean => {
  if (!filePath) return false;
  const ext = filePath.toLowerCase().slice(filePath.lastIndexOf(".") + 1);
  return ext === format.toLowerCase();
};

export const isSVG = (filePath: string): boolean => isFileType(filePath, "svg");
export const isPNG = (filePath: string): boolean => isFileType(filePath, "png");
export const isJPG = (filePath: string): boolean => isFileType(filePath, "jpg");
export const isJPEG = (filePath: string): boolean =>
  isFileType(filePath, "jpeg") || isFileType(filePath, "jpg");
export const isGIF = (filePath: string): boolean => isFileType(filePath, "gif");
export const isWEBP = (filePath: string): boolean =>
  isFileType(filePath, "webp");
export const isICO = (filePath: string): boolean => isFileType(filePath, "ico");
export const isBMP = (filePath: string): boolean => isFileType(filePath, "bmp");
export const isTIFF = (filePath: string): boolean =>
  isFileType(filePath, "tiff");
export const isPDF = (filePath: string): boolean => isFileType(filePath, "pdf");
export const isDOC = (filePath: string): boolean => isFileType(filePath, "doc");
export const isDOCX = (filePath: string): boolean =>
  isFileType(filePath, "docx");
export const isXLS = (filePath: string): boolean => isFileType(filePath, "xls");
export const isXLSX = (filePath: string): boolean =>
  isFileType(filePath, "xlsx");
export const isPPT = (filePath: string): boolean => isFileType(filePath, "ppt");
export const isPPTX = (filePath: string): boolean =>
  isFileType(filePath, "pptx");
export const isTXT = (filePath: string): boolean => isFileType(filePath, "txt");
export const isCSV = (filePath: string): boolean => isFileType(filePath, "csv");
export const isJSON = (filePath: string): boolean =>
  isFileType(filePath, "json");
export const isYAML = (filePath: string): boolean =>
  isFileType(filePath, "yaml");
export const isXML = (filePath: string): boolean => isFileType(filePath, "xml");
export const isMp3 = (filePath: string): boolean => isFileType(filePath, "mp3");
export const isMp4 = (filePath: string): boolean => isFileType(filePath, "mp4");

export const isURL = (value: string): boolean => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export const isRealPNG = (filePath: string): boolean =>
  isPNG(filePath) && isBinary(fs.readFileSync(filePath));
export const isRealJPG = (filePath: string): boolean =>
  isJPG(filePath) && isBinary(fs.readFileSync(filePath));
export const isRealJPEG = (filePath: string): boolean =>
  isJPEG(filePath) && isBinary(fs.readFileSync(filePath));
