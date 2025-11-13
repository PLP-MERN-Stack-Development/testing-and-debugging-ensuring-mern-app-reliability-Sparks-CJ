const { authMiddleware } = require('../../src/middleware/auth');
const jwt = require('jsonwebtoken');

describe('authMiddleware', () => {
  it('should call next() if token is valid', () => {
    const req = { headers: { authorization: `Bearer ${jwt.sign({ id: '1' }, process.env.JWT_SECRET || 'secret')}` } };
    const res = {};
    const next = jest.fn();
    authMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should throw error if token is missing', () => {
    const req = { headers: {} };
    const res = {};
    const next = jest.fn();
    expect(() => authMiddleware(req, res, next)).toThrow();
  });
});
