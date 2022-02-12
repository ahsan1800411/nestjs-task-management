/* eslint-disable prettier/prettier */

import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../tasks.model';

export class TaskStatusValidatorPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not a valid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}
