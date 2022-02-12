/* eslint-disable prettier/prettier */
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS])
  status: TaskStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
