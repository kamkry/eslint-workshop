import { createRuleTester } from '../utils/createRuleTester';
import { task1 } from './task-1';

const ruleTester = createRuleTester();

describe('task1', () => {
  ruleTester.run('task1', task1, {
    valid: [
      { code: 'a === b' }, //
      { code: 'a !== b' }, //
    ],
    invalid: [
      {
        code: 'a == b',
        errors: [{ messageId: 'unexpected' }],
      },
      {
        code: 'a != b',
        errors: [{ messageId: 'unexpected' }],
      },
    ],
  });
});
