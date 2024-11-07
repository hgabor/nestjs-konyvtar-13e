import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      id: 1,
      author: 'A.A. Milne',
      title: 'Winnie the Pooh',
      isbn: '0525444432',
      publishYear: 1988,
      reserved: true,
    },
        {
      id: 2,
      author: 'A.A. Milne',
      title: 'Winnie the Pooh 2 - The Sequel',
      isbn: '978-3-16-148410-0',
      publishYear: 2001,
      reserved: false,
    },
    {
      id: 4,
      author: 'Me',
      title: 'Learn NestJS in 30 days',
      isbn: '978-3-16-148410-0',
      publishYear: 2023,
      reserved: false,
    },
  ];
  nextId = 5;

  create(createBookDto: CreateBookDto) {
    const newBook = {
      ...createBookDto,
      id: this.nextId,
      reserved: false,
    };
    this.books.push(newBook);
    this.nextId++;

    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book => book.id == id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const index = this.books.findIndex(book => book.id == id);

    if (index == -1) {
      return undefined;
    }

    const newBook = {
      ...this.books[index],
      ...updateBookDto,
    }

    this.books[index] = newBook;

    return newBook;
  }

  remove(id: number) {
    const index = this.books.findIndex(book => book.id == id);

    if (index == -1) {
      return false;
    }

    this.books.splice(index, 1);
    return true;
  }
}
