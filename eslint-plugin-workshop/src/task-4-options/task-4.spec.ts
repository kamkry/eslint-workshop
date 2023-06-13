import { createRuleTester } from '../utils/createRuleTester';
import { task4 } from './task4';

const ruleTester = createRuleTester();

describe('task-4', () => {
  ruleTester.run('task-4', task4, {
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
