import { createRuleTester } from '../utils/createRuleTester';
import { noDoubleEqual } from './no-double-equal';

const ruleTester = createRuleTester();

describe('task1', () => {
  ruleTester.run('task1', noDoubleEqual, {
    valid: [],
    invalid: [],
  });
});
