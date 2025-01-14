// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // Needed for TypeScript support
import pluginReact from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const configs = [
  // Define file patterns for linting
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Add @eslint/js recommended rules
  pluginJs.configs.recommended,

  // Add TypeScript rules
  ...tseslint.configs.recommended,
  tseslint.configs["recommended-requiring-type-checking"],

  // Add React rules
  pluginReact.configs.flat.recommended,

  // Add Next.js core web vitals and TypeScript settings (via FlatCompat)
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  ...compat.extends("standard"),
];

export default configs;
