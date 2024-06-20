module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', 'plugin:storybook/recommended'],
  rules: {
    "curly": ["error", "all"],
    "vue/html-indent": ["error", 2, {
      "baseIndent": 1,
      "closeBracket": 0,
      "attribute": 1,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/script-indent": ["error", 2, {
      "baseIndent": 0,
      "switchCase": 1,
      "ignores": []
    }],
    "vue/require-v-for-key": "off",
    "vue/valid-v-slot": "off",
    "vue/no-dupe-keys": "off",
    "vue/return-in-computed-property": "off",
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
