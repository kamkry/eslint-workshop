import { createRuleTester } from '../utils/createRuleTester';
import { task2 } from './task2';

const ruleTester = createRuleTester();

describe('task-2', () => {
  ruleTester.run('task-2', task2, {
    valid: [
      { code: 'a === b' }, //
      { code: 'a !== b' }, //
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
      },
      {
        code: 'a != b',
        errors: [
          {
            messageId: 'unexpected',
            data: { expectedOperator: '!==', actualOperator: '!=' },
          },
        ],
      },
    ],
  });
});
