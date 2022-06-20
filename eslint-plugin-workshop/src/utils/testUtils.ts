import { RuleTester } from 'eslint';

export const defaultRuleTester = () => {
  return new RuleTester({
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  });
};

export const withOptions = (extraOptions: any[]) => (object: Record<string, any>) => ({
  ...object,
  options: [{ ...(object.options ? object.options[0] : {}), ...extraOptions }],
});

export const withErrors = (errors: any[]) => (object: Record<string, any>) => ({
  errors,
  ...object,
});
