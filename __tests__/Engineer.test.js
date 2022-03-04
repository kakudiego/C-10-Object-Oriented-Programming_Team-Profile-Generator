const Engineer = require('../lib/Engineer');

test('Can set GitHub account via constructor', () => {
  const gitHub = 'kakudiego';
  const engineer = new Engineer('Diego', 85, 'diego@diego.com', gitHub);
  expect(engineer.github).toBe(gitHub);
});

test('getRole() should return "Engineer"', () => {
  const getRole = 'Engineer';
  const engineer = new Engineer('Diego', 85, 'diego@diego.com', 'kakudiego');
  expect(engineer.getRole()).toBe(getRole);
});

test('Can get GitHub username via getGithub()', () => {
  const getGitHub = 'kakudiego';
  const engineer = new Engineer('Diego', 85, 'diego@diego.com', getGitHub);
  expect(engineer.github).toBe(getGitHub);
});
