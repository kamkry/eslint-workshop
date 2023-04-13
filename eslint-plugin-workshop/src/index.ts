import { task1 } from './task-1-basic/task-1';
import { recommended } from './configs';
import { task3 } from './task-3-custom-message/task-3';
import { task5 } from './task-5-options/task-5';
import { task2 } from './task-2-custom-location/task-2';
import { task4 } from './task-4-fixer/task-4';

export = {
  rules: {
    task1,
    task2,
    task3,
    task4,
    task5,
  },
  configs: {
    recommended,
  },
};
