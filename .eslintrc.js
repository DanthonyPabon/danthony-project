module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    "react-native/react-native": true,
  },
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "module-resolver",
    "import",
    "react",
    "react-native",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/ban-types": "warn",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        camelcase: "warn",
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        complexity: ["warn", { max: 4 }],
        "prefer-arrow-callback": "off",
        "import/newline-after-import": ["error", { count: 1 }],
        "import/no-anonymous-default-export": [
          "warn",
          {
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowArray: false,
            allowArrowFunction: false,
            allowCallExpression: false,
            allowLiteral: false,
            allowObject: false,
          },
        ],
        "import/order": [
          "error",
          {
            alphabetize: {
              caseInsensitive: true /* Ignore case. Options: [true, false] */,
              order:
                "asc" /* Sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
            },
            groups: ["builtin", "external", "parent", "sibling", "index"],
            "newlines-between": "always",
            pathGroups: [
              {
                group: "parent",
                pattern: "src/**",
                position: "before",
              },
            ],
          },
        ],
        "sort-keys": "warn",
        "@typescript-eslint/indent": ["error", 2],
      },
    },
  ],
  settings: {
    "import/internal-regex": "^src/",
  },
};
