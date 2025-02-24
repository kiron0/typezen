import { type ImageFileExtensionType } from "../types";
import { ImageFileExtension } from "../utils";

const isFileType = (filePath: string, format: string): boolean => {
  if (!filePath) return false;
  const ext = filePath.toLowerCase().slice(filePath.lastIndexOf(".") + 1);
  return ext === format.toLowerCase();
};

// Check if the file is an image: Example: isImageFile(new File([""], "image.png")) => true
export const isImageFile = (file: File): boolean => {
  if (!file) throw new Error("File is required");

  if (!(file instanceof File)) throw new Error("Invalid file type");

  const validExtensions: ImageFileExtensionType[] = Object.values(
    ImageFileExtension,
  ).map((ext) => ext.toString() as ImageFileExtensionType);

  const ext = file.name.split(".").pop();
  if (!ext) return false;

  return validExtensions.includes(ext.toLowerCase() as ImageFileExtensionType);
};

// Check if the file is a zip: Example: isZipFile("file.zip") => true
export const isZipFile = (filePath: string): boolean =>
  isFileType(filePath, "zip");

// Check if the file is a tar: Example: isTarFile("file.tar") => true
export const isTarFile = (filePath: string): boolean =>
  isFileType(filePath, "tar");

// Check if the file is a gz: Example: isGzFile("file.gz") => true
export const isGzFile = (filePath: string): boolean =>
  isFileType(filePath, "gz");

// Check if the file is a rar: Example: isRarFile("file.rar") => true
export const isRarFile = (filePath: string): boolean =>
  isFileType(filePath, "rar");

// Check if the file is a 7z: Example: is7zFile("file.7z") => true
export const is7zFile = (filePath: string): boolean =>
  isFileType(filePath, "7z");

// Check if the file is a tgz: Example: isTgzFile("file.tgz") => true
export const isTgzFile = (filePath: string): boolean =>
  isFileType(filePath, "tgz");

// Check if the file is a bz2: Example: isBz2File("file.bz2") => true
export const isBz2File = (filePath: string): boolean =>
  isFileType(filePath, "bz2");

// Check if the file is a xz: Example: isXzFile("file.xz") => true
export const isXzFile = (filePath: string): boolean =>
  isFileType(filePath, "xz");

// Check if the file is an executable: Example: isExecutableFile("file.exe") => true
export const isExecutableFile = (filePath: string): boolean =>
  isFileType(filePath, "exe") ||
  isFileType(filePath, "sh") ||
  isFileType(filePath, "bat") ||
  isFileType(filePath, "cmd") ||
  isFileType(filePath, "msi") ||
  isFileType(filePath, "app") ||
  isFileType(filePath, "deb") ||
  isFileType(filePath, "rpm") ||
  isFileType(filePath, "apk") ||
  isFileType(filePath, "jar") ||
  isFileType(filePath, "bin") ||
  isFileType(filePath, "dmg") ||
  isFileType(filePath, "pkg") ||
  isFileType(filePath, "run");

// Check if the file is a plain text: Example: isPlainTextFile("file.txt") => true
export const isPlainTextFile = (filePath: string): boolean =>
  isFileType(filePath, "txt");

// Check if the file is a markdown: Example: isMarkdownFile("file.md") => true
export const isMarkdownFile = (filePath: string): boolean =>
  isFileType(filePath, "md");

// Check if the file is an HTML: Example: isHTMLFile("file.html") => true
export const isHTMLFile = (filePath: string): boolean =>
  isFileType(filePath, "html") || isFileType(filePath, "htm");

// Check if the file is a CSS: Example: isCSSFile("file.css") => true
export const isCSSFile = (filePath: string): boolean =>
  isFileType(filePath, "css");

// Check if the file is a JavaScript: Example: isJavaScriptFile("file.js") => true
export const isJavaScriptFile = (filePath: string): boolean =>
  isFileType(filePath, "js");

// Check if the file is a TypeScript: Example: isTypeScriptFile("file.ts") => true
export const isTypeScriptFile = (filePath: string): boolean =>
  isFileType(filePath, "ts");

// Check if the file is an SVG: Example: isSVG("file.svg") => true
export const isSVG = (filePath: string): boolean => isFileType(filePath, "svg");

// Check if the file is a PNG: Example: isPNG("file.png") => true
export const isPNG = (filePath: string): boolean => isFileType(filePath, "png");

// Check if the file is a JPG: Example: isJPG("file.jpg") => true
export const isJPG = (filePath: string): boolean => isFileType(filePath, "jpg");

// Check if the file is a JPEG: Example: isJPEG("file.jpeg") => true
export const isJPEG = (filePath: string): boolean =>
  isFileType(filePath, "jpeg") || isFileType(filePath, "jpg");

// Check if the file is a GIF: Example: isGIF("file.gif") => true
export const isGIF = (filePath: string): boolean => isFileType(filePath, "gif");

// Check if the file is a WEBP: Example: isWEBP("file.webp") => true
export const isWEBP = (filePath: string): boolean =>
  isFileType(filePath, "webp");

// Check if the file is an ICO: Example: isICO("file.ico") => true
export const isICO = (filePath: string): boolean => isFileType(filePath, "ico");

// Check if the file is a BMP: Example: isBMP("file.bmp") => true
export const isBMP = (filePath: string): boolean => isFileType(filePath, "bmp");

// Check if the file is a TIFF: Example: isTIFF("file.tiff") => true
export const isTIFF = (filePath: string): boolean =>
  isFileType(filePath, "tiff");

// Check if the file is a PDF: Example: isPDF("file.pdf") => true
export const isPDF = (filePath: string): boolean => isFileType(filePath, "pdf");

// Check if the file is a DOC: Example: isDOC("file.doc") => true
export const isDOC = (filePath: string): boolean => isFileType(filePath, "doc");

// Check if the file is a DOCX: Example: isDOCX("file.docx") => true
export const isDOCX = (filePath: string): boolean =>
  isFileType(filePath, "docx");

// Check if the file is a XLS: Example: isXLS("file.xls") => true
export const isXLS = (filePath: string): boolean => isFileType(filePath, "xls");

// Check if the file is a XLSX: Example: isXLSX("file.xlsx") => true
export const isXLSX = (filePath: string): boolean =>
  isFileType(filePath, "xlsx");

// Check if the file is a PPT: Example: isPPT("file.ppt") => true
export const isPPT = (filePath: string): boolean => isFileType(filePath, "ppt");

// Check if the file is a PPTX: Example: isPPTX("file.pptx") => true
export const isPPTX = (filePath: string): boolean =>
  isFileType(filePath, "pptx");

// Check if the file is a TXT: Example: isTXT("file.txt") => true
export const isTXT = (filePath: string): boolean => isFileType(filePath, "txt");

// Check if the file is a CSV: Example: isCSV("file.csv") => true
export const isCSV = (filePath: string): boolean => isFileType(filePath, "csv");

// Check if the file is a JSON: Example: isJSON("file.json") => true
export const isJSON = (filePath: string): boolean =>
  isFileType(filePath, "json");

// Check if the file is a YAML: Example: isYAML("file.yaml") => true
export const isYAML = (filePath: string): boolean =>
  isFileType(filePath, "yaml");

// Check if the file is an XML: Example: isXML("file.xml") => true
export const isXML = (filePath: string): boolean => isFileType(filePath, "xml");

// Check if the file is an MP3: Example: isMp3("file.mp3") => true
export const isMp3 = (filePath: string): boolean => isFileType(filePath, "mp3");

// Check if the file is an MP4: Example: isMp4("file.mp4") => true
export const isMp4 = (filePath: string): boolean => isFileType(filePath, "mp4");
