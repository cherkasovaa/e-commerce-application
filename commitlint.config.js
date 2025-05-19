module.exports = {
  extends: ['@commitlint/config-conventional'],
  cwd: process.cwd(),
  rules: {
    'header-max-length': [0, 'always', 60],
    'body-max-line-length': [0, 'always', 200],
  },
};
