import {expect} from 'chai'

// Testing module
import isFunction from '../../src/validators/isFunction'

describe('validators/isFunction', () => {
	it('Should be a function', () => {
		expect(isFunction)
			.to
			.be
			.instanceOf(Function)
	})

	it('Should return true', () => {
		expect(isFunction(() => {}))
			.to
			.be
			.true
	})

	it('Should return false', () => {
		expect(isFunction(''))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isFunction({}))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isFunction(null))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isFunction(true))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isFunction(5))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isFunction([]))
			.to
			.be
			.false
	})
})
