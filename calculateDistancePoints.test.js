const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('hillSize', () => {
		it('should return error, informing about wrong hillSize value', () => {
			const actual = calculateDistancePoints(200,4,200);

			const expected = 'Wrong hillSize value!';

			assert.equal(actual, expected);
		});
		it('should return correct value, test for mammoth ski jump', () => {
			const actual = calculateDistancePoints(240,3,200);

			const expected = 168;

			assert.equal(actual, expected);
		});
		it('should return correct value, test for big ski jump', () => {
			const actual = calculateDistancePoints(240,2, 180);
			const expected = 168;
			assert.equal(actual, expected);
		});
		it('should return correct value, test for normal ski jump', () => {
			const actual = calculateDistancePoints(140,1,160);
			const expected = 20;
			assert.equal(actual, expected);
		});
	});
})