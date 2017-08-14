import {expect} from 'chai'

// Testing module
import isObject from '../../src/validators/isObject'

describe('validators/isObject', () => {
	it('Should be a function', () => {
		expect(isObject)
			.to
			.be
			.instanceOf(Function)
	})

	it('Should return true', () => {
		expect(isObject({}))
			.to
			.be
			.true
	})

	it('Should return true', () => {
		expect(isObject(null))
			.to
			.be
			.true
	})

	it('Should return false', () => {
		expect(isObject(''))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isObject(() => {}))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isObject(true))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isObject(5))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isObject([]))
			.to
			.be
			.false
	})
})
