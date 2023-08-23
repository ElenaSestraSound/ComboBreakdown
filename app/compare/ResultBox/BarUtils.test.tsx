import * as utils from './BarUtils';

describe('BarUtils - defaults', () => {
  it('barLength', async () => {
    const length = utils.barLength;
    expect(length).toBeDefined;
  });
  it('ticksArray', async () => {
    const ticks = utils.ticksArray;
    expect(ticks).toBeDefined;
  });
  it('barColors', async () => {
    const barColors = utils.barColors;
    expect(barColors).toBeDefined;
  });
  it('barMargin', async () => {
    const barMargin = utils.barMargin;
    expect(barMargin).toBeDefined;
  });
});

describe('BarUtils - parse active', () => {
  it('parses active string value', async () => {
    const one = utils.parseActive("1");
    expect(one).toEqual(1);
  });
  it('parses active double string value', async () => {
    const two = utils.parseActive("1-2");
    expect(two).toEqual(2);
  });
  it('parses multi active value to an array', async () => {
    const arr = utils.parseActive("1-2, 4-5, 7-8");
    expect(arr).toHaveLength(3);
  });
  it('parses non-numerical value', async () => {
    const arr = utils.parseActive("x");
    expect(arr).toEqual(0);
  });
});

describe('BarUtils - parse active value', () => {
  it('parses active values to an array', async () => {
    const arr = utils.parseActiveValue("1-2, 4-5, 7-8");
    expect(arr).toHaveLength(3);
  });
  it('parses active value without a dash', async () => {
    const arr = utils.parseActiveValue("8,x");
    expect(arr).toEqual([1, 1]);
  });
});

describe('BarUtils - get active duration', () => {
  it('parses active duration', async () => {
    const two = utils.getActiveDuration("1-3");
    expect(two).toEqual(2);
  });
  it('parses single active duration', async () => {
    const three = utils.getActiveDuration("3");
    expect(three).toEqual(3);
  });
  it('parses NaN active duration to 0', async () => {
    const zero = utils.getActiveDuration("x");
    expect(zero).toEqual(0);
  });

  describe('BarUtils - get recovery value', () => {
    it('parses recovery duration', async () => {
      const two = utils.getRecoveryValue(2, 0);
      expect(two).toEqual(2);
    });
  });
  it('handles undefined recovery duration', async () => {
    const zero = utils.getRecoveryValue(undefined, 0);
    expect(zero).toEqual(0);
  });

});
