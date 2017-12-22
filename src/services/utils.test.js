import * as utils from './utils';

describe('(Global) utils', () => {
  it('unique', () => {
    const ary = [5, 3, 1, 3, 7];
    const uniq = utils.unique(ary);
    expect(uniq).toEqual(expect.arrayContaining([5, 3, 1, 7]));
  });

  it('getHoursDiff', () => {
    const t1 = new Date();
    let t2 = new Date();
    t2.setHours(t1.getHours() - 3);

    const diff = utils.getHoursDiff(t1, t2);

    expect(diff).toEqual(3);
  });
});
