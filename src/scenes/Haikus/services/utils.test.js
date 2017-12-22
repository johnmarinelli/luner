import * as utils from './utils';
import { now } from '../../../services/utils';

describe('(Haikus) utils', () => {
  let t0;

  beforeEach(() => (t0 = new Date(now())));

  it('calculateScore returns 0 for 0 upvotes', () => {
    const ups = 0;
    const ageHours = 0;
    expect(utils.calculateScore(ups, ageHours)).toBe(0);
  });

  it('calculateScore returns 0 < n < 0.1 for a 10 hour old post with 1 upvote', () => {
    const ups = 1;
    const ageHours = 10;
    expect(utils.calculateScore(ups, ageHours)).toBeLessThan(0.1);
  });

  it('calculateScore returns 0.1 < n < 0.2 for a 15 hour old post with 2 upvote', () => {
    const ups = 2;
    const ageHours = 15;
    const score = utils.calculateScore(ups, ageHours);
    expect(score).toBeGreaterThan(0.1);
    expect(score).toBeLessThan(0.2);
  });

  it('rankHaikus returns 0 for exact same upvotes and times', () => {
    let t1 = new Date(t0);
    let t2 = new Date(t0);

    t1.setHours(t0.getHours() - 10);
    t2.setHours(t0.getHours() - 10);

    const h1 = {
      author: 'h1',
      createdAt: t1,
      upvotes: 1
    };

    const h2 = {
      author: 'h2',
      createdAt: t2,
      upvotes: 1
    };

    expect(utils.rankHaikus(h1, h2)).toBe(0);
  });

  it('rankHaikus should return 1 when right haiku is greater than left haiku', () => {
    let t1 = new Date(t0);
    let t2 = new Date(t0);

    t1.setHours(t0.getHours() - 10);
    t2.setHours(t0.getHours() - 10);

    const h1 = {
      author: 'h1',
      createdAt: t1,
      upvotes: 1
    };

    const h2 = {
      author: 'h2',
      createdAt: t2,
      upvotes: 2
    };

    expect(utils.rankHaikus(h1, h2)).toBe(1);
  });

  it('rankHaikus should return -1 when left haiku is greater', () => {
    let t1 = new Date(t0);
    let t2 = new Date(t0);

    t1.setHours(t0.getHours() - 10);
    t2.setHours(t0.getHours() - 16);

    const h1 = {
      createdAt: t1,
      upvotes: 1
    };

    const h2 = {
      createdAt: t2,
      upvotes: 2
    };

    expect(utils.rankHaikus(h1, h2)).toBe(1);
  });

  it('rankHaikus should return 1 when right haiku is greater', () => {
    let t1 = new Date(t0);
    let t2 = new Date(t0);

    t1.setHours(t0.getHours() - 10);
    t2.setHours(t0.getHours() - 16);

    const h1 = {
      createdAt: t1,
      upvotes: 1
    };

    const h2 = {
      createdAt: t2,
      upvotes: 3
    };

    expect(utils.rankHaikus(h1, h2)).toBe(1);
  });
});
