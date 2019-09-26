const { getSliced } = require('./utils');
const { data } = require('./data');

test('test getSliced, count = 3', () => {
    expect(getSliced(data, 3).length).toBe(3);
});

test('test getSliced, count = -1', () => {
    expect(getSliced(data, -1).length).toBe(0);
});

test('test getSliced, count = -5', () => {
    try {
        getSliced(data, -5);
    } catch (e) {
        expect(e.message).toBe('some error');
    }
});

test('test getSliced, count = {}', () => {
    expect(getSliced(data, {}).length).toBe(0);
});
test('test getSliced, count = 4', () => {
    expect(getSliced(data, 4).length).toBe(4);
});

test('test getSliced, count = -2', () => {
    expect(getSliced(data, -2).length).toBe(0);
});

test('test getSliced, count = -7', () => {
    try {
        getSliced(data, -7);
    } catch (e) {
        expect(e.message).toBe('some error');
    }
});

test('test getSliced, count = 1', () => {
    expect(getSliced(data, 1).length).toBe(1);
});
test('test getSliced, count = 10', () => {
    expect(getSliced(data, 10).length).toBe(10);
});

test('test getSliced, count = -10', () => {
    expect(getSliced(data, -10).length).toBe(0);
});

test('test getSliced, count = -45', () => {
    try {
        getSliced(data, -45);
    } catch (e) {
        expect(e.message).toBe('some error');
    }
});

test('test getSliced, count = []', () => {
    expect(getSliced(data, []).length).toBe(0);
});
test('test getSliced, count = ""', () => {
    expect(getSliced(data, "").length).toBe(0);
});