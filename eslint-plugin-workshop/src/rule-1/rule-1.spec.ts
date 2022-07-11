import { createRuleTester } from '../utils/createRuleTester';
import { rule1 } from './rule-1';
import { AST_NODE_TYPES } from '@typescript-eslint/types';

const ruleTester = createRuleTester();

const wantedEqEqEq = { expectedOperator: '===', actualOperator: '==' };
const wantedNotEqEq = { expectedOperator: '!==', actualOperator: '!=' };

describe('rule-1', () => {
  ruleTester.run('rule-1', rule1, {
    valid: [
      { code: 'a === null' },
      { code: 'a !== null' },
      { code: 'null === null' },
      { code: 'null !== null' },
    ],
    invalid: [
      {
        code: 'true == true',
        errors: [{ messageId: 'unexpected', data: wantedEqEqEq, type: AST_NODE_TYPES.BinaryExpression }],
        output: 'true === true',
      },
      {
        code: 'true == null',
        errors: [{ messageId: 'unexpected', data: wantedEqEqEq, type: AST_NODE_TYPES.BinaryExpression }],
        output: 'true === null',
      },
      {
        code: 'true != null',
        errors: [{ messageId: 'unexpected', data: wantedNotEqEq, type: AST_NODE_TYPES.BinaryExpression }],
        output: 'true !== null',
      },
      {
        code: 'null == null',
        errors: [{ messageId: 'unexpected', data: wantedEqEqEq, type: AST_NODE_TYPES.BinaryExpression }],
        output: 'null === null',
      },
      {
        code: 'null != null',
        errors: [{ messageId: 'unexpected', data: wantedNotEqEq, type: AST_NODE_TYPES.BinaryExpression }],
        output: 'null !== null',
      },
    ],
  });
});
