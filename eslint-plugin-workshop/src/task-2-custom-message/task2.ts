import { createRule } from '../utils/createRule';

type MessageIds = 'unexpected';
type Options = [];

export const task2 = createRule<Options, MessageIds>({
  meta: {
    type: 'problem',
    messages: { unexpected: 'Expected {{expectedOperator}}, received {{actualOperator}}' },
    schema: {},
  },
  defaultOptions: [],

  create: (context) => {
    return {
      BinaryExpression: (node) => {
        if (node.operator === '==') {
          return context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '===', actualOperator: '==' },
            node,
          });
        }

        if (node.operator === '!=') {
          return context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '!==', actualOperator: '!=' },
            node,
          });
        }
      },
    };
  },
});
