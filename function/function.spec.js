const { dataNormalization } = require('./function');

describe('dataNormalization', () => {
  test('should normalize a one-dimensional array', () => {
    const data1 = [10, 20, 30, 40, 50];
    const expected = [0, 0.25, 0.5, 0.75, 1];
    const result = dataNormalization(data1);
    expect(result).toEqual(expected);
  });

  test('should normalize a multi-dimensional array', () => {
    const data = [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90]
    ];
    const expected = [
      [0, 0.125, 0.25],
      [0.375, 0.5, 0.625],
      [0.75, 0.875, 1]
    ];
    const result = dataNormalization(data);
    expect(result).toEqual(expected);
  });

  test('should handle a one-dimensional array with identical values', () => {
    const data1 = [50, 50, 50, 50, 50];
    const expected = [0, 0, 0, 0, 0];
    const result = dataNormalization(data1);
    expect(result).toEqual(expected);
  });

  test('should handle a multi-dimensional array with identical values', () => {
    const data = [
      [50, 50, 50],
      [50, 50, 50],
      [50, 50, 50]
    ];
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    const result = dataNormalization(data);
    expect(result).toEqual(expected);
  });

  test('should normalize a one-dimensional array with custom range', () => {
    const data1 = [10, 20, 30, 40, 50];
    const expected = [10, 12.5, 15, 17.5, 20];
    const result = dataNormalization(data1, 10, 20);
    expect(result).toEqual(expected);
  });

  test('should normalize a multi-dimensional array with custom range', () => {
    const data = [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90]
    ];
    const expected = [
      [10, 11.25, 12.5],
      [13.75, 15, 16.25],
      [17.5, 18.75, 20]
    ];
    const result = dataNormalization(data, 10, 20);
    expect(result).toEqual(expected);
  });

  test('should throw error for non-array input', () => {
    expect(() => {
      dataNormalization(123);
    }).toThrow('Data should be a non-empty array.');
  });

  test('should throw error for empty array input', () => {
    expect(() => {
      dataNormalization([]);
    }).toThrow('Data should be a non-empty array.');
  });
});
