import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-console": "warn",
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
  {
    rules: {
      ...prettier,
    },
  },
];
