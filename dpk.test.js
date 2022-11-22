const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it("Returns the literal '0' when given empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe('0');
  });

  it('Provided a partitionKey more than 256 value should be less than 256', () => {
    const invalidPartitionKey = new Array(260).toString();
    const trivialKey = deterministicPartitionKey({ partitionKey: invalidPartitionKey });
    expect(trivialKey.length).toBeLessThan(256);
  });

  it('not providing a partitionKey returns a value', () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: null });
    expect(trivialKey.length).toBeDefined();
  });

  it('not providing a partitionKey returns a value', () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey.length).toBeDefined();
  });
});
