import { createRuleTester } from '../utils/createRuleTester';
import { task5 } from './task-5';

const ruleTester = createRuleTester();

describe('task-5', () => {
  ruleTester.run('task-5', task5, {
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
            column: 3,
            endColumn: 5,
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
            column: 3,
            endColumn: 5,
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
            column: 3,
            endColumn: 5,
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
            column: 3,
            endColumn: 5,
            data: { expectedOperator: '!==', actualOperator: '!=' },
          },
        ],
        output: 'a !== null',
      },
    ],
  });
});
