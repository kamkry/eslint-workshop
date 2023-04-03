import { createRule } from '../utils/createRule';

type MessageIds = 'unexpected';
type Options = [];

export const task2 = createRule<Options, MessageIds>({
  meta: {
    type: 'problem',
    fixable: 'code',
    messages: { unexpected: 'Unexpected operator' },
    schema: {},
  },
  defaultOptions: [],

  create: (context) => {
    return {
      BinaryExpression: (node) => {
        const operatorToken = context.getSourceCode().getFirstTokenBetween(node.left, node.right);

        if (node.operator === '==') {
          return context.report({
            messageId: 'unexpected',
            node,
            loc: operatorToken?.loc,
          });
        }

        if (node.operator === '!=') {
          return context.report({
            messageId: 'unexpected',
            node,
            loc: operatorToken?.loc,
          });
        }
      },
    };
  },
});
