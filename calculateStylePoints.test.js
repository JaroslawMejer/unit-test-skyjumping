const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	describe('checking diffrent values', () => {
		it('should return correct value', () => {
			const actual = calculateStylePoints([1,2,3,4,5])

			const expected = 9;
			assert.equal(actual, expected);
		});
		it('should return correct value', () => {
			const actual = calculateStylePoints([1,1,2,5,10])

			const expected = 8;
			assert.equal(actual, expected);
		});
		it('should return error, because of too many votes', () => {
			const actual = calculateStylePoints([1,2,3,4,5,6,7]);

			const expected = 'Error';
			assert.equal(actual,expected);
		});
	});
})