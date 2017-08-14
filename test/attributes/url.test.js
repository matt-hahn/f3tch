import {expect} from 'chai'

// Helpers
const urls = [
	'http://fake.com',
	'',
	'/foo',
	() => '/bar',
]

// Testing module
import {validateUrl, prepareUrl} from '../../src/attributes/url'

describe('attributes/url', () => {
	describe('validateUrl', () => {
		it('Should be a function', () => {
			expect(validateUrl)
				.to
				.be
				.instanceof(Function)
		})

		it('Should return empty string', () => {
			expect(validateUrl(''))
				.to
				.equal('')
		})

		it('Should return parsed url #1', () => {
			expect(validateUrl(urls[0]))
				.to
				.equal('http://fake.com')
		})

		it('Should return parsed url #2', () => {
			expect(validateUrl(urls[3]))
				.to
				.equal('/bar')
		})
	})

	describe('prepareUrl', () => {
		it('Should be a function', () => {
			expect(prepareUrl)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return empty string', () => {
			expect(prepareUrl('', ''))
				.to
				.equal('')
		})

		it('Should return parsed string', () => {
			expect(prepareUrl(...urls))
				.to
				.equal('http://fake.com/foo/bar')
		})
	})
})
