import { createRule } from '../utils/createRule';
import { Rule } from 'eslint';
import RuleModule = Rule.RuleModule;

export const rule1 = createRule<any, any>({
  name: 'rule-1',
  meta: {
    type: 'problem',
    fixable: 'code',
    messages: { na: '' },
    docs: {
      description: 'heh',
      recommended: false,
    },
    schema: {},
  },
  defaultOptions: [],

  create(context) {
    return {
      FunctionDeclaration: (node) => {
        context.report({
          messageId: 'na',
          node,
        });
      },
    };
  },
});
