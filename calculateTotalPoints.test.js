const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('checking diffrent values', () => {
		it('should return correct value', () => {
			const actual = calculateTotalPoints(227.5, 3, 200, [18.0,18.5,17.5,18.5,19], -8.4, 8.7);

			const expected = 208.3;
			assert.equal(actual, expected);
		});
	});
})