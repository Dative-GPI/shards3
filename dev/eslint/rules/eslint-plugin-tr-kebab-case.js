import { defineTemplateBodyVisitor } from 'eslint-plugin-vue/lib/utils/index.js';

export default {
  rules: {
    'tr-kebab-case-tr': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce tr-kebab-case for $tr translation codes.',
          category: 'Best Practices',
        },
        messages: {
          trKebabCaseError: 'The translation key "{{key}}" must be in tr-kebab-case.',
        },
      },
      create(context) {
        const trKebabCaseRegex = /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/;
        const reportedKeys = new Set();

        const reportKey = (arg, node) => {
          if (!reportedKeys.has(arg)) {
            context.report({
              node,
              messageId: 'trKebabCaseError',
              data: { key: arg },
            });
            reportedKeys.add(arg);
          }
        };

        const checkArg = (arg, node) => {
          if (arg && !trKebabCaseRegex.test(arg)) {
            reportKey(arg, node);
          }
        };

        return {
          CallExpression(node) {
            if (node.callee.name === '$tr' && node.arguments.length > 0) {
              checkArg(node.arguments[0].value, node.arguments[0]);
            }
          },
          ...defineTemplateBodyVisitor(context, {
            VAttribute(node) {
              if (node.value?.expression?.type === 'CallExpression' && node.value.expression.callee.name === '$tr') {
                checkArg(node.value.expression.arguments[0]?.value, node.value.expression.arguments[0]);
              }
            },
            VExpressionContainer(node) {
              if (node.expression?.type === 'CallExpression' && node.expression.callee.name === '$tr') {
                checkArg(node.expression.arguments[0]?.value, node.expression.arguments[0]);
              }
            },
            VElement(node) {
              node.attributes?.forEach(attr => {
                if (attr.value?.expression?.type === 'CallExpression' && attr.value.expression.callee.name === '$tr') {
                  checkArg(attr.value.expression.arguments[0]?.value, attr.value.expression.arguments[0]);
                }
              });

              node.children?.forEach(child => {
                if (child.type === 'VText' && child.value.includes('$tr')) {
                  const matches = child.value.match(/\$tr\("([^"]+)"\)/);
                  if (matches) {
                    checkArg(matches[1], child);
                  }
                } else if (child.type === 'VElement') {
                  child.children?.forEach(grandChild => {
                    if (grandChild.type === 'VExpressionContainer' && grandChild.expression?.type === 'CallExpression' && grandChild.expression.callee.name === '$tr') {
                      checkArg(grandChild.expression.arguments[0]?.value, grandChild.expression.arguments[0]);
                    }
                  });
                }
              });
            },
          }),
        };
      },
    },
  },
};
