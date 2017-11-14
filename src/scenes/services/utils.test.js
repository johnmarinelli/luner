import * as utils from './utils';

describe('utility functions', () => {
  it('unique', () => {
    const ary = [5, 3, 1, 3, 7];
    const uniq = utils.unique(ary);
    expect(uniq).
      toEqual(expect.arrayContaining([5,3,1,7]));
  });
});
