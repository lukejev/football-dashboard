import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    "plugins": [
      "react",
      "prettier"
    ],
    "extends": ["eslint:all", "plugin:react/all", "plugin:prettier/recommended"],
    rules: {
      "sort-keys": "error",
    },
    eslintConfigPrettier,
  },
];

export default eslintConfig;
