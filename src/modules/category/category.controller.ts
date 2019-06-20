import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Category } from './category.interface';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
import { type } from 'os';

@Controller('category')
export class CategoryController {
  constructor(readonly categoryService: CategoryService) {
  }
  @Get()
  async getCategory(): Promise<[Category]> {
    return await this.categoryService.getCategory();
  }
  @Post()
  async addCategory(@Body() category: CategoryDto): Promise<boolean> {
    return await this.categoryService.addCategory();
  }
  @Delete()
  async delCategory(@Param('id', new ParseIntPipe()) id): Promise<boolean> {
    return await this.categoryService.delCategory(id);
  }
  @Put()
  async updateCategory(@Param('id', new ParseIntPipe()) id, @Body() category: CategoryDto): Promise<boolean> {
    return await this.categoryService.updateCategory(id);
  }
  @Get(':id')
  async queryCategory(@Param('id', new ParseIntPipe()) id): Promise<[Category]> {
    return await this.categoryService.queryCategory(id);
  }
}