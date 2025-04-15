import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { faker } from '@faker-js/faker';

describe('TaskController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tasks (GET)', () => {
    return request(app.getHttpServer()).get('/tasks').expect(200);
  });

  it('/tasks (POST)', () => {
    const title = faker.lorem.sentence();
    return request(app.getHttpServer())
      .post('/tasks')
      .send({ title })
      .expect(201);
  });

  it('/tasks/:id/status (PATCH)', async () => {
    const title = faker.lorem.sentence();

    const createResponse = await request(app.getHttpServer())
      .post('/tasks')
      .send({ title })
      .expect(201);

    const newTask = createResponse?.body;
    const taskId = newTask.id;

    await request(app.getHttpServer())
      .patch(`/tasks/${taskId}/status`)
      .send({ status: 'DONE' })
      .expect(200);
  });
});
