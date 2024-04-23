module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', 'plugin:storybook/recommended'],
  rules: {
    "vue/multi-word-component-names": 'off',
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "below",
      "multiline": "below"
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },      
      "multiline": {
        "max": 1
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always",
      "selfClosingTag": {
        "singleline": "never",
        "multiline": "always"
      }
    }]
  },
}
