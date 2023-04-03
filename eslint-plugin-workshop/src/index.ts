import { task1 } from './task-1-basic/task-1';
import { recommended } from './configs';
import { task3 } from './task-2-custom-message/task-3';
import { task4 } from './task-4-options/task-4';
import { task2 } from './task-2-custom-location/task-2';

export = {
  rules: {
    task1,
    task2,
    task3,
    task4,
  },
  configs: {
    recommended,
  },
};
