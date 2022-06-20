import { defaultRuleTester } from '../utils/testUtils';
import { rule1 } from './rule-1';

const ruleTester = defaultRuleTester();

describe('rule-1', () => {
  describe('should pass valid syntax', () => {
    ruleTester.run('rule-1', rule1, {
      valid: [],
      invalid: [],
    });
  });
});
