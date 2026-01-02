module.exports = {
  rules: {
    'no-console': process.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': 'error',
    'no-useless-catch': 'error'
  }
}
