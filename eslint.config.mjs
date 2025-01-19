export default [
  {
    files: ["**/*.ts"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    rules: {
      "semi": ["error", "always"], // Enforce semicolons
      "quotes": ["error", "double"], // Enforce double quotes
      "indent": ["error", 2], // Enforce 2 spaces for indentation
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas
      "@typescript-eslint/no-empty-interface" : "off"
    },
  },
];