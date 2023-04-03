import { createRuleTester } from '../utils/createRuleTester';
import { task3 } from './task-3';

const ruleTester = createRuleTester();

describe('task-3', () => {
  ruleTester.run('task-3', task3, {
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
