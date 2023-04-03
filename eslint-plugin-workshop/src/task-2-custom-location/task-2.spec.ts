import { createRuleTester } from '../utils/createRuleTester';
import { task2 } from './task-2';

const ruleTester = createRuleTester();

describe('task2', () => {
  ruleTester.run('task2', task2, {
    valid: [
      { code: 'a === b' }, //
      { code: 'a !== b' }, //
    ],
    invalid: [
      {
        code: 'a == b',
        errors: [{ messageId: 'unexpected', column: 3, endColumn: 5 }],
      },
      {
        code: 'a != b',
        errors: [{ messageId: 'unexpected', column: 3, endColumn: 5 }],
      },
    ],
  });
});
