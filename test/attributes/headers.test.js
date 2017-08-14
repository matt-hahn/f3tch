import {expect} from 'chai'

// Helpers
const headers = [
	{
		hello: 'world'
	},
	() => ({foo: 'true'}),
	'invalid',
	() => 'another invalid',
	{
		baz: 1,
	},
	() => ({baz: '2'})
]

const headersToObject = headers => {
	let entries = {}
	headers.forEach((value, name) => {
		entries = {
			...entries,
			[name]: value,
		}
	})
	return entries
}

// Testing module
import {parseHeaders, prepareHeaders} from '../../src/attributes/headers'

describe('attributes/headers', () => {
	describe('parseHeaders', () => {
		it('Should be a function', () => {
			expect(parseHeaders)
				.to
				.be
				.instanceof(Function)
		})

		it('Should return an empty object', () => {
			expect(parseHeaders([]))
				.to
				.deep
				.equal({})
		})

		it('Should return validated headers', () => {
			expect(parseHeaders(headers))
				.to
				.deep
				.equal({
					hello: 'world',
					foo: 'true',
					baz: '2',
				})
		})
	})

	describe('prepareHeaders', () => {
		it('Should be a function', () => {
			expect(prepareHeaders)
				.to
				.be
				.instanceof(Function)
		})

		it('Should return a Headers object', () => {
			expect(headersToObject(prepareHeaders()))
				.to
				.deep
				.equal({})
		})

		it('Should return validated headers', () => {
			expect(headersToObject(prepareHeaders(...headers)))
				.to
				.deep
				.equal({
					hello: 'world',
					foo: 'true',
					baz: '2',
				})
		})
	})
})
