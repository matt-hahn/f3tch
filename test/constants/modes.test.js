import {expect} from 'chai'

// Testing module
import modes from '../../src/constants/modes.constants'

describe('constants/modes', () => {
	it('Should be an array', () => {
		expect(modes)
			.to
			.be
			.instanceOf(Array)
	})

	it('Should be an array of modes', () => {
		expect(modes)
			.to
			.deep
			.equal([
				'same-origin',
				'cors',
				'cors-with-forced-preflight',
				'no-cors',
			])
	})
})
