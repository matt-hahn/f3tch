import {expect} from 'chai'

// Testing module
import isArray from '../../src/validators/isArray'

describe('validators/isArray', () => {
	it('Should be a function', () => {
		expect(isArray)
			.to
			.be
			.instanceOf(Function)
	})

	it('Should return true', () => {
		expect(isArray([]))
			.to
			.be
			.true
	})

	it('Should return false', () => {
		expect(isArray(''))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isArray({}))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isArray(null))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isArray(true))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isArray(5))
			.to
			.be
			.false
	})
})
