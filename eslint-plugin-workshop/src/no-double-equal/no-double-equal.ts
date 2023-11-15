import { createRule } from '../utils/createRule';

type MessageIds = 'unexpected';
type Options = [];

export const noDoubleEqual = createRule<Options, MessageIds>({
  meta: {
    type: 'problem',
    messages: { unexpected: 'Expected {{expectedOperator}}, received {{actualOperator}}' },
    schema: {},
  },
  defaultOptions: [],

  create: (context) => {
    return {
      BinaryExpression: (node) => {
        const operatorToken = context.getSourceCode().getFirstTokenBetween(node.left, node.right);

        if (!operatorToken) {
          return;
        }

        if (node.operator === '==') {
          return context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '===', actualOperator: '==' },
            node,
            fix: (fixer) => fixer.replaceText(operatorToken, '==='),
          });
        }

        if (node.operator === '!=') {
          return context.report({
            messageId: 'unexpected',
            data: { expectedOperator: '!==', actualOperator: '!=' },
            node,
            fix: (fixer) => fixer.replaceText(operatorToken, '!=='),
          });
        }
      },
    };
  },
});
