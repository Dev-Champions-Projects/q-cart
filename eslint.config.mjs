// eslint.config.mjs

import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["node_modules/**", ".next/**"], // optional, but recommended
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Next.js recommended rules
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];
