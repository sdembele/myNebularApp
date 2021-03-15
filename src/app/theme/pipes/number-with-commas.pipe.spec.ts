import { NumberWithCommasPipe } from './number-with-commas.pipe';

describe('NumberWithCommasPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberWithCommasPipe();
    expect(pipe).toBeTruthy();
  });
});
