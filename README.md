# TypeZen 🔍

[![npm version](https://img.shields.io/npm/v/typezen.svg?style=flat-square)](https://www.npmjs.com/package/typezen)
[![npm downloads](https://img.shields.io/npm/dm/typezen.svg?style=flat-square)](https://www.npmjs.com/package/typezen)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square)](https://www.typescriptlang.org/)

**A Zen-like Toolkit for Type Checking and Validation**
*"Find Your Type Peace"* ✨

---

## 🌟 Features

- **100+ Type Guards** - Comprehensive type checking functions
- **Zero Dependencies** - Lightweight and pure TypeScript
- **Runtime Validation** - Works in both Node.js and browsers
- **Image File Validation** - Image file type validation
- **TypeScript First** - Full type inference support

---

## 📦 Installation

```bash
npm install typezen
# or
yarn add typezen
# or
bun add typezen
```

---

## 🚀 Quick Start

```typescript
import { isEmail, isURL } from 'typezen';

// Validate email
if (isEmail('user@example.com')) {
  console.log('Valid email! 📧');
}

// Check URL validity
if (isURL('https://typezen.dev')) {
  console.log('Valid URL! 🌐');
}
```

---

## 📚 Core Functions

### 🔢 Primitive Checks
```typescript
import {
  isNumber, isInteger, isFloat, isString,
  isBoolean, isSymbol, isPrimitive, isNaNValue
} from 'typezen';

isNumber(42);            // true
isFloat(3.14);           // true
isString('Zen');         // true
isPositive(6);           // true
```

### 🧰 Object Checks
```typescript
import {
  isObject, isArray, isPromise,
  isMap, isSet, isEmpty
} from 'typezen';

isPromise(fetch('/data'));   // true
isEmpty({});                 // true
isMap(new Map());            // true
```

### 📂 File & URL Validation
```typescript
import {
  isPNG, isJPEG, isSVG,
  isMP3, isMP4, isURL
} from 'typezen';

// File extension check
isPNG('image.png');      // true

// Image file check
await isImageFile(File);  // true (checks file contents)

// URL validation
isURL('https://typezen.dev/guide');  // true
```

### 🎨 Special Formats
```typescript
import { isHexColor, isEmail, isJSON } from 'typezen';

isHexColor('#ff0044');    // true
isEmail('user@domain.com'); // true
isJSON('{"key":"value"}'); // true
```

---

## 🧠 Advanced Usage

### Custom Error Handling
```typescript
import { isInteger, TypeValidationError } from 'typezen';

function validateAge(age: unknown): number {
  if (!isInteger(age)) {
    throw new TypeValidationError('Age must be an integer');
  }
  return age;
}
```

### Combining Validators
```typescript
import { isString, isEmail, isBetween } from 'typezen';

function isValidUsername(input: unknown): boolean {
  return isString(input) &&
         isBetween(input.length, 4, 20) &&
         !isEmail(input);
}
```

## 💡 Why TypeZen?

- **Runtime Safety**: Catch type errors before they crash your app
- **TypeScript Optimized**: Full type inference and generics support
- **Universal**: Works in Node.js, Deno, and modern browsers
- **Extensible**: Create custom type guards easily

---

## 🛠️ Contributing

```bash
# Clone repo
git clone https://github.com/kiron0/typezen.git

# Install dependencies
bun install

# Build project
bun run build
```

---

## 📜 License

MIT © Toufiq Hasan Kiron
*"The wise validate types before they act"* - TypeZen Proverb 🎋
