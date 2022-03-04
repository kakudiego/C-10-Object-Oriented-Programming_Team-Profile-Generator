const Manager = require('../lib/Manager');

test('Can set office number via constructor argument', () => {
  const office = 99;
  const manager = new Manager('Diego', 99, 'diego@diego.com', office);
  expect(manager.officeNumber).toBe(office);
});

test('getRole() should return "Manager"', () => {
  const getRole = 'Manager';
  const manager = new Manager('Diego', 85, 'diego@diego.com', 99);
  expect(manager.getRole()).toBe(getRole);
});

test('Can get office number via getOffice()', () => {
  const getOfficeNumber = 99;
  const manager = new Manager('Diego', 85, 'diego@diego.com', getOfficeNumber);
  expect(manager.getOfficeNumber()).toBe(getOfficeNumber);
});
