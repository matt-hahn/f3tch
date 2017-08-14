import {expect} from 'chai'

// helpers
import Fetch from '../../src/classes/Fetch'

const _fetch = new Fetch('http://fake.com')
_fetch.data.method = 'GET'

// Testing module
import call from '../../src/libs/call'

describe('libs/call', () => {
	it('Should be a function', () => {
		expect(call)
			.to
			.be
			.instanceof(Function)
	})

	it('Should return a promise', () => {
		expect(call(_fetch.data))
			.to
			.be
			.instanceOf(Promise)
	})

	it('Should return a response', async () => {
		const response = await call(_fetch.data)
		expect(response)
			.to
			.be
			.instanceof(Object)
	})
})
