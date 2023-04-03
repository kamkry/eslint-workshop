import { createRule } from '../utils/createRule';

type MessageIds = 'unexpected';
type Options = [];

export const task4 = createRule<Options, MessageIds>({
  meta: {
    type: 'problem',
    fixable: 'code',
    messages: { unexpected: 'Expected {{expectedOperator}}, received {{actualOperator}}' },
    schema: {},
  },
  defaultOptions: [],

  create: (context) => {
    return {
      BinaryExpression: (node) => {
        const operatorRange = [node.left.range[1] + 1, node.right.range[0] - 1] as const;

        if (node.operator === '==') {
          return context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '===', actualOperator: '==' },
            node,
            fix: (fixer) => fixer.replaceTextRange(operatorRange, '==='),
          });
        }

        if (node.operator === '!=') {
          return context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '!==', actualOperator: '!=' },
            node,
            fix: (fixer) => fixer.replaceTextRange(operatorRange, '!=='),
          });
        }
      },
    };
  },
});
