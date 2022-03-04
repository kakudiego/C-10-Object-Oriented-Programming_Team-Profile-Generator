const Intern = require('../lib/Intern');

test('Can set school via constructor', () => {
  const school = 'BootCamp';
  const intern = new Intern('Diego', 85, 'diego@diego.com', school);
  expect(intern.school).toBe(school);
});

test('getRole() should return "Intern"', () => {
  const getRoleIntern = 'Intern';
  const intern = new Intern('Diego', 85, 'diego@diego.com', 'BootCamp');
  expect(intern.getRole()).toBe(getRoleIntern);
});

test('Can get school via getSchool()', () => {
  const getSchool = 'BootCamp';
  const intern = new Intern('Diego', 85, 'diego@diego.com', getSchool);
  expect(intern.getSchool()).toBe(getSchool);
});
