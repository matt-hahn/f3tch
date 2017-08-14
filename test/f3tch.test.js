import {expect} from 'chai'

// Helpers
import modes from '../src/constants/modes.constants'
import Profile from '../src/classes/Profile'

const generateProfile = () => profile('profile')
	.url('http://fake.com')
	.query('foo=bar')
	.query({
		baz: true
	})
	.headers({
		a: 'b',
		b: 'c',
	})
	.mode(modes[0])

// Testing module
import f3tch, {profile} from '../index'

describe('Main module', () => {
	describe('profile', () => {
		it('Should be a function', () => {
			expect(profile)
				.to
				.be
				.instanceof(Function)
		})

		it('Should return a profile object', () => {
			expect(profile('p'))
				.to
				.be
				.instanceof(Object)
		})

		it('Should create a profile object', () => {
			expect(generateProfile().data)
				.to
				.deep
				.equal({
					...Profile.DEFAULT_PROFILE,
					profile: 'profile',
					url: 'http://fake.com',
					query: ['foo=bar', {baz: true}],
					headers: [{a: 'b', b: 'c'}],
					mode: modes[0]
				})
		})
	})

	describe('f3tch', () => {
		it('Should be a function', () => {
			expect(f3tch)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return an instance of Fetch', () => {
			expect(f3tch('url'))
				.to
				.be
				.instanceof(Object)
		})

		it('Should make the api call with profile', async () => {
			const response = await f3tch('').profile('profile').get()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})

		it('Should make the api call without profile', async () => {
			const response = await f3tch('http://fake.com')
				.query('foo=bar')
				.query({
					baz: true
				})
				.headers({
					a: 'b',
					b: 'c',
				})
				.mode(modes[0])
				.get()

			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})
})
