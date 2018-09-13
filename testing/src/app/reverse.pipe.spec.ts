import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse', () => {
    expect(pipe.transform('123')).toBe('321');
  });

  it('should throw an error', () => {
    expect(() => {
      pipe.transform(1);
    }).toThrowError('ReversePipe: Argument is not a string');
  });
});
