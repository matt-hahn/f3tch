import {expect} from 'chai'

// Testing module
import isDefined from '../../src/validators/isDefined'

describe('validators/isDefined', () => {
	it('Should be a function', () => {
		expect(isDefined)
			.to
			.be
			.instanceOf(Function)
	})

	it('Should return true', () => {
		expect(isDefined({}))
			.to
			.be
			.true
	})

	it('Should return true', () => {
		expect(isDefined(''))
			.to
			.be
			.true
	})

	it('Should return false', () => {
		expect(isDefined(null))
			.to
			.be
			.false
	})

	it('Should return false', () => {
		expect(isDefined(undefined))
			.to
			.be
			.false
	})
})
