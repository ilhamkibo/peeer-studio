import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(() => {
    controller = new AppController(new AppService());
  });

  it('reports a healthy API', () => {
    const health = controller.getHealth();

    assert.equal(health.status, 'ok');
    assert.equal(Number.isNaN(Date.parse(health.timestamp)), false);
  });
});
