import {expect} from 'chai'

// Testing module
import credentials from '../../src/constants/credentials.constants'

describe('constants/credentials', () => {
	it('Should be an array', () => {
		expect(credentials)
			.to
			.be
			.instanceOf(Array)
	})

	it('Should be an array of credentials', () => {
		expect(credentials)
			.to
			.deep
			.equal([
				'omit',
				'same-origin',
				'include',
			])
	})
})
