import {expect} from 'chai'

// helpers
import credentials from '../../src/constants/credentials.constants'

// Testing module
import prepareFetch from '../../src/libs/prepareFetch'

describe('libs/prepareFetch', () => {
	it('Should be a function', () => {
		expect(prepareFetch)
			.to
			.be
			.instanceOf(Function)
	})

	it('Should return fetch attributes #1', () => {
		expect(prepareFetch({
			url: 'http://fake.com',
			method: 'GET',
			profile: null,
			headers: [],
			query: [],
			body: null,
			credentials: null,
			mode: null,
		}))
			.to
			.deep
			.equal({
				url: 'http://fake.com',
				options: {
					method: 'GET',
					headers: new Headers(),
				},
				responder: null,
			})
	})

	it('Should return fetch attributes #2', () => {
		expect(prepareFetch({
			url: 'http://fake.com',
			method: 'POST',
			profile: null,
			headers: [{foo: 'bar'}],
			query: [{baz: 2}],
			body: null,
			credentials: null,
			mode: null,
		}))
			.to
			.deep
			.equal({
				url: 'http://fake.com?baz=2',
				options: {
					method: 'POST',
					headers: new Headers({foo: 'bar'}),
				},
				responder: null,
			})
	})

	it('Should return fetch attributes #3', () => {
		expect(prepareFetch({
			url: 'http://fake.com',
			method: 'POST',
			profile: null,
			headers: [{foo: 'bar'}],
			query: [{baz: 2}],
			body: {bar: 'aaa'},
			credentials: credentials[0],
			mode: null,
		}))
			.to
			.deep
			.equal({
				url: 'http://fake.com?baz=2',
				options: {
					method: 'POST',
					headers: new Headers({foo: 'bar'}),
					credentials: credentials[0],
					body: {bar: 'aaa'}
				},
				responder: null,
			})
	})
})
