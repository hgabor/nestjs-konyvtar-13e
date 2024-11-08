import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  db: PrismaService;

  // Dependency Injection
  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createBookDto: CreateBookDto) {
    return this.db.book.create({
      data: createBookDto
    })
  }

  async findAll() {
    return this.db.book.findMany();
  }

  findOne(id: number) {
    return this.db.book.findUnique({
      where: { id: id }
    })
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      return await this.db.book.update({
        data: updateBookDto,
        where: { id }
      })
    } catch {
      return undefined;
    }
  }

  async remove(id: number) {
    try {
      await this.db.book.delete({
        where: { id }
      })
      return true;
    } catch {
      return false;
    }
  }
}
