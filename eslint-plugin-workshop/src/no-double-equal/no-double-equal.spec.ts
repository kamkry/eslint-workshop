import { createRuleTester } from '../utils/createRuleTester';
import { noDoubleEqual } from './no-double-equal';

const ruleTester = createRuleTester();

describe('no-double-equal', () => {
  ruleTester.run('no-double-equal', noDoubleEqual, {
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
