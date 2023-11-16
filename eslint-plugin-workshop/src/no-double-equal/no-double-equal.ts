import { createRule } from '../utils/createRule';
import { TSESTree } from '@typescript-eslint/typescript-estree';

type MessageIds = 'unexpected';
type Options = [
  {
    allowNull: boolean;
  }
];

export const noDoubleEqual = createRule<Options, MessageIds>({
  meta: {
    type: 'problem',
    fixable: 'code',
    messages: { unexpected: 'Expected {{expectedOperator}}, received {{actualOperator}}' },
    schema: {
      properties: {
        allowNull: {
          type: 'boolean',
          default: false,
        },
      },
    },
  },
  defaultOptions: [{ allowNull: false }],

  create: (context, [options]) => {
    return {
      BinaryExpression: (node) => {
        const operatorToken = context.getSourceCode().getFirstTokenBetween(node.left, node.right);

        if (!operatorToken) {
          return;
        }

        if (options.allowNull && (isNull(node.left) || isNull(node.right))) {
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

function isNull(leftOrRight: TSESTree.Expression | TSESTree.PrivateIdentifier) {
  return leftOrRight.type === 'Literal' && leftOrRight.value === null;
}
