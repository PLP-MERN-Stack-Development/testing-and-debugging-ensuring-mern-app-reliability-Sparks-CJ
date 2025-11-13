const { generateToken } = require('../../src/utils/auth');
const jwt = require('jsonwebtoken');

describe('generateToken utility', () => {
  it('should generate a valid JWT token', () => {
    const user = { _id: '12345', username: 'testuser' };
    const token = generateToken(user);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    expect(decoded.id).toBe(user._id);
    expect(decoded.username).toBe(user.username);
  });
});
