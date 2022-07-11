import { createRule } from '../utils/createRule';

type MessageIds = 'unexpected';

export const rule1 = createRule<[], MessageIds>({
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
          context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '===', actualOperator: '==' },
            node,
            fix: (fixer) => fixer.replaceTextRange(operatorRange, '==='),
          });

          return;
        }

        if (node.operator === '!=') {
          context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '!==', actualOperator: '!=' },
            node,
            fix: (fixer) => fixer.replaceTextRange(operatorRange, '!=='),
          });

          return;
        }
      },
    };
  },
});
