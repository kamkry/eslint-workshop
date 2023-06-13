import { createRule } from '../utils/createRule';

type MessageIds = 'unexpected';
type Options = [];

export const task1 = createRule<Options, MessageIds>({
  meta: {
    type: 'problem',
    messages: { unexpected: 'Unexpected operator' },
    schema: {},
  },
  defaultOptions: [],

  create: (context) => {
    return {
      BinaryExpression: (node) => {
        if (node.operator === '==') {
          return context.report({
            messageId: 'unexpected',
            node,
          });
        }

        if (node.operator === '!=') {
          return context.report({
            messageId: 'unexpected',
            node,
          });
        }
      },
    };
  },
});
