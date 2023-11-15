import { createRuleTester } from '../utils/createRuleTester';
import { noDoubleEqual } from './no-double-equal';

const ruleTester = createRuleTester();

describe('no-double-equal', () => {
  ruleTester.run('no-double-equal', noDoubleEqual, {
    valid: [
      { code: 'a === b' },
      { code: 'a !== b' },
      { code: 'a === null' },
      { code: 'a !== null' },
      { code: 'a == null', options: [{ allowNull: true }] },
      { code: 'a != null', options: [{ allowNull: true }] },
    ],
    invalid: [
      {
        code: 'a == b',
        errors: [
          {
            messageId: 'unexpected',
            data: { expectedOperator: '===', actualOperator: '==' },
          },
        ],
        output: 'a === b',
      },
      {
        code: 'a != b',
        errors: [
          {
            messageId: 'unexpected',
            data: { expectedOperator: '!==', actualOperator: '!=' },
          },
        ],
        output: 'a !== b',
      },
      {
        code: 'a == null',
        errors: [
          {
            messageId: 'unexpected',
            data: { expectedOperator: '===', actualOperator: '==' },
          },
        ],
        output: 'a === null',
      },
      {
        code: 'a != null',
        errors: [
          {
            messageId: 'unexpected',
            data: { expectedOperator: '!==', actualOperator: '!=' },
          },
        ],
        output: 'a !== null',
      },
    ],
  });
});
