import { createRuleTester } from '../utils/createRuleTester';
import { task4 } from './task-4';

const ruleTester = createRuleTester();

describe('task-4', () => {
  ruleTester.run('task-4', task4, {
    valid: [{ code: 'a === b' }, { code: 'a !== b' }],
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
    ],
  });
});
