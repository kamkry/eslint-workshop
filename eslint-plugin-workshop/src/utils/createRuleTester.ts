import { ESLintUtils } from '@typescript-eslint/experimental-utils';

type Options = Partial<ConstructorParameters<typeof ESLintUtils.RuleTester>>;

export const createRuleTester = (options?: Options) => {
  return new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
    ...options,
  });
};
