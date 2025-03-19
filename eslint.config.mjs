// -------------------------------------------------------------------------------------------------
// Based on personal ESLint configs for NextTS I already use for a personal WIP project.
// -------------------------------------------------------------------------------------------------

/* eslint-disable import/no-anonymous-default-export */

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {
    ignores: ["**/.next/*", "**/node_modules/*"]
  },
  {
    rules: {
      // Basic style.
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "camelcase": ["error", { "properties": "always" }],
      "max-len": ["warn", { "code": 140 }],

      // Spacing and layout.
      "indent": ["error", 2],
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      "comma-dangle": ["error", "never"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "react/jsx-closing-bracket-location": ["error", "after-props"],

      // Disallow mixed function styles.
      "func-style": ["error", "declaration", { "allowArrowFunctions": false }],

      // Linting.
      "import/no-anonymous-default-export": "off",
      "no-warning-comments": ["warn", { "terms": ["todo"], "location": "start" }],
      "no-console": "error",
      "no-duplicate-imports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }
      ]
    }
  },
  {
    files: ["*.ts", "view-model.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": ["error"]
    }
  },
  ...compat.extends("next/core-web-vitals", "next/typescript")
];
