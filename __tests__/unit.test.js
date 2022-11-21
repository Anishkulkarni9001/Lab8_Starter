// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Tests real phone number #1
test('realPhoneNumber1', () => {
    phoneNumber = '408-229-9934'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

// Tests real phone number #2
test('realPhoneNumber2', () => {
    phoneNumber = '111-111-1111'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

// Tests false phone number #1
test('fakePhoneNumber1', () => {
    phoneNumber = '123'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

// Tests false phone number #2
test('fakePhoneNumber2', () => {
    phoneNumber = '123-456-789'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

// Tests real email #1
test('realEmail1', () => {
    emailString = 'ajk@gmail.com'
    expect(functions.isEmail(emailString)).toBe(true);
});

// Tests real email #2
test('realEmail2', () => {
    emailString = 'test_Name123@example.com'
    expect(functions.isEmail(emailString)).toBe(true);
});

// Tests fake email #1
test('fakeEmail1', () => {
    emailString = 'name@yahoo.com@gmail.com';
    expect(functions.isEmail(emailString)).toBe(false);
});

// Tests fake email #2
test('fakeEmail2', () => {
    emailString = 'thisisnotanemail.123'
    expect(functions.isEmail(emailString)).toBe(false);
});

// Tests strong password #1
test('strongPass1', () => {
    passString = 'my_password'
    expect(functions.isStrongPassword(passString)).toBe(true);
});

// Tests strong password #2
test('strongPass2', () => {
    passString = 'letmeinplease'
    expect(functions.isStrongPassword(passString)).toBe(true);
});

// Tests weak password #1
test('weakPass1', () => {
    passString = 'thispasswordisjustwaytoolongtouse';
    expect(functions.isStrongPassword(passString)).toBe(false);
});

// Tests weak password #2
test('weakPass2', () => {
    passString = '@mypass'
    expect(functions.isStrongPassword(passString)).toBe(false);
});

// Tests real date #1
test('realDate1', () => {
    date = '20/11/2022'
    expect(functions.isDate(date)).toBe(true);
});

// Tests real date #2
test('realDate2', () => {
    date = '09/24/2001'
    expect(functions.isDate(date)).toBe(true);
});

// Tests fake date #1
test('fakeDate1', () => {
    date = '01/01/01';
    expect(functions.isDate(date)).toBe(false);
});

// Tests fake date #2
test('fakeDate2', () => {
    date = 'thisisntadate'
    expect(functions.isDate(date)).toBe(false);
});

// Tests real hex color string #1
test('realHex1', () => {
    hexString = 'FFA82B'
    expect(functions.isHexColor(hexString)).toBe(true);
});

// Tests real hex color string #2
test('realHex2', () => {
    hexString = 'a2c'
    expect(functions.isHexColor(hexString)).toBe(true);
});

// Tests fake hex color string #1
test('fakeHex1', () => {
    hexString = 'RGB';
    expect(functions.isHexColor(hexString)).toBe(false);
});

// Tests fake hex color string #2
test('fakeHex2', () => {
    hexString = 'F'
    expect(functions.isHexColor(hexString)).toBe(false);
});