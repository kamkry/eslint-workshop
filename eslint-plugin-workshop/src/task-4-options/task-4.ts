import { createRule } from '../utils/createRule';
import { TSESTree } from '@typescript-eslint/typescript-estree';

type MessageIds = 'unexpected';
type Options = [
  {
    allowNull: boolean;
  }
];

export const task4 = createRule<Options, MessageIds>({
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
        const operatorRange = [node.left.range[1] + 1, node.right.range[0] - 1] as const;

        if (options.allowNull && (isNull(node.left) || isNull(node.right))) {
          return;
        }

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

function isNull(leftOrRight: TSESTree.Expression | TSESTree.PrivateIdentifier) {
  return leftOrRight.type === 'Literal' && leftOrRight.value === null;
}
