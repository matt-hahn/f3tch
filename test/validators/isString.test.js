import {expect} from 'chai'

// Testing module
import isString from '../../src/validators/isString'

describe('validators/isString', () => {
	it('Should be a function', () => {
		expect(isString)
			.to
			.be
			.instanceOf(Function)
	})

	it('Should return true', () => {
		expect(isString(''))
			.to
			.be
			.true
	})

	it('Should return false', () => {
		expect(isString(() => {}))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isString({}))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isString(null))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isString(true))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isString(5))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isString([]))
			.to
			.be
			.false
	})
})
