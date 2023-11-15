import { createRuleTester } from '../utils/createRuleTester';
import { noDoubleEqual } from './no-double-equal';

const ruleTester = createRuleTester();

describe('no-double-equal', () => {
  ruleTester.run('no-double-equal', noDoubleEqual, {
    valid: [],
    invalid: [],
  });
});
