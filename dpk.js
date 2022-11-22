const crypto = require('crypto');

const _createHash = (data) => {
  return crypto.createHash('sha3-512').update(data).digest('hex');
};

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0';
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const { partitionKey } = event;

  if (typeof partitionKey === 'string' && partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    return _createHash(partitionKey);
  }

  const data = JSON.stringify(event);
  return JSON.stringify(_createHash(data));
};

module.exports = { deterministicPartitionKey };
