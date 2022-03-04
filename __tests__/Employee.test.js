const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
  const employee = new Employee();
  expect(typeof employee).toBe('object');
});

test('Can set name via constructor arguments', () => {
  const name = 'Diego';
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('Can set id via constructor argument', () => {
  const id = 85;
  const employee = new Employee('Diego', id);
  expect(employee.id).toBe(id);
});

test('Can set email via constructor argument', () => {
  const email = 'diego@diego.com';
  const employee = new Employee('Diego', 85, email);
  expect(employee.email).toBe(email);
});

test('Can get name via getName()', () => {
  const getName = 'Diego';
  const employee = new Employee(getName);
  expect(employee.getName()).toBe(getName);
});

test('Can get id via getId()', () => {
  const getId = 85;
  const employee = new Employee('Diego', getId);
  expect(employee.getId()).toBe(getId);
});

test('Can get email via getEmail()', () => {
  const getEmail = 'diego@diego.com';
  const employee = new Employee('Diego', 85, getEmail);
  expect(employee.getEmail()).toBe(getEmail);
});

test('getRole() should return "Employee"', () => {
  const getRole = 'Employee';
  const employee = new Employee('Diego', 85, 'diego@diego.com');
  expect(employee.getRole()).toBe(getRole);
});
