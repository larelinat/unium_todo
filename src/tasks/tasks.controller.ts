import {Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe,} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {Task} from 'src/schemas/task.schema';


@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
  }

  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  ///@Redirect('/hello', 302)
  async findOne(@Param('id') id: string) {
    /* if (id === '3') {
       return {
         'url' : '/hello',
         'statusCode' : 404
       }
     }*/
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
