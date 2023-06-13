import { task1 } from './task-1-basic/task-1';
import { recommended } from './configs';
import { task2 } from './task-3-custom-message/task2';
import { task4 } from './task-5-options/task4';
import { task2 } from './task-2-custom-location/task-2';
import { task3 } from './task-4-fixer/task3';

export = {
  rules: {
    task1,
    task2,
    task3: task2,
    task4: task3,
    task5: task4,
  },
  configs: {
    recommended,
  },
};
