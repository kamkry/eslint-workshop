import { createRule } from '../utils/createRule';

type MessageIds = never;
type Options = [];

export const noDoubleEqual = createRule<Options, MessageIds>({
  meta: {
    type: 'problem',
    messages: {},
    schema: {},
  },
  defaultOptions: [],

  create: (context) => {
    return {};
  },
});
