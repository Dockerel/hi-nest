import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'return all moveis';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this movie with id : ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie ${movieId}`;
  }

  @Patch('/:id')
  Patch(@Param('id') movieId: string) {
    return `patch id : ${movieId}`;
  }
}
