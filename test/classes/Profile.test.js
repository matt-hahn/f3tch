import {expect} from 'chai'

// Testing modules
import Profile from '../../src/classes/Profile'

describe('classes/Profile', () => {
	it('Should be a class function', () => {
		expect(Profile)
			.to
			.be
			.instanceOf(Function)
	})

	describe('Static properties', () => {
		describe('DEFAULT_PROFILE', () => {
			it('Should be an object', () => {
				expect(Profile.DEFAULT_PROFILE)
					.to
					.be
					.instanceOf(Object)
			})

			it('Should have default value of', () => {
				expect(Profile.DEFAULT_PROFILE)
					.to
					.deep
					.equal({
						url: '',
						method: null,
						profile: null,
						headers: [],
						query: [],
						body: null,
						credentials: null,
						mode: null,
						responder: null,
					})
			})
		})

		describe('profiles', () => {
			it('Should be an object', () => {
				expect(Profile.profiles)
					.to
					.be
					.instanceof(Object)
			})

			it('Should be an empty object', () => {
				expect(Profile.profiles)
					.to
					.deep
					.equal({})
			})
		})

		describe('setProfile', () => {
			it('Should be a function', () => {
				expect(Profile.setProfile)
					.to
					.be
					.instanceof(Function)
			})

			it('Should set a profile without problems', () => {
				expect(Profile.setProfile({profile: 'test', data: {}}))
					.to
					.not
					.throw
			})
		})

		describe('getProfile', () => {
			it('Should be a function', () => {
				expect(Profile.getProfile)
					.to
					.be
					.instanceof(Function)
			})

			it('Should return saved profile', () => {
				Profile.setProfile({profile: 'profile', data: 'data'})
				expect(Profile.getProfile('profile'))
					.to
					.deep
					.equal({data: 'data'})
			})
		})
	})

	describe('Instance properties', () => {
		describe('data', () => {
			it('Should be an object', () => {
				expect(new Profile('a').data)
					.to
					.be
					.instanceof(Object)
			})

			it('Should be the same as the DEFAULT_PROFILE', () => {
				expect(new Profile('b').data)
					.to
					.deep
					.equal({...Profile.DEFAULT_PROFILE, profile: 'b'})
			})
		})

		describe('constructor', () => {
			it('Should create an instance of profile', () => {
				expect(new Profile('c'))
					.to
					.be
					.instanceof(Object)
			})
		})

		describe('url', () => {
			it('Should be a function', () => {
				expect(new Profile('a').url)
					.to
					.be
					.instanceof(Function)
			})

			it('Should set the url', () => {
				const p = new Profile('b').url('some-value')
				expect(p.data.url)
					.to
					.equal('some-value')
			})
		})

		describe('query', () => {
			it('Should be a function', () => {
				expect(new Profile('a').query)
				.to
				.be
				.instanceof(Function)
			})

			it('Should set the query', () => {
				const p = new Profile('b').query('some-value')
				expect(p.data.query)
				.to
				.deep
				.equal(['some-value'])
			})
		})

		describe('body', () => {
			it('Should be a function', () => {
				expect(new Profile('a').body)
				.to
				.be
				.instanceof(Function)
			})

			it('Should set the body', () => {
				const p = new Profile('b').body('some-value')
				expect(p.data.body)
				.to
				.equal('some-value')
			})
		})

		describe('headers', () => {
			it('Should be a function', () => {
				expect(new Profile('a').headers)
				.to
				.be
				.instanceof(Function)
			})

			it('Should set the headers', () => {
				const p = new Profile('b').headers('some-value')
				expect(p.data.headers)
				.to
				.deep
				.equal(['some-value'])
			})
		})

		describe('mode', () => {
			it('Should be a function', () => {
				expect(new Profile('a').mode)
				.to
				.be
				.instanceof(Function)
			})

			it('Should set the mode', () => {
				const p = new Profile('b').mode('some-value')
				expect(p.data.mode)
				.to
				.equal('some-value')
			})
		})

		describe('credentials', () => {
			it('Should be a function', () => {
				expect(new Profile('a').credentials)
				.to
				.be
				.instanceof(Function)
			})

			it('Should set the credentials', () => {
				const p = new Profile('b').credentials('some-value')
				expect(p.data.credentials)
				.to
				.equal('some-value')
			})
		})

		describe('responder', () => {
			it('Should be a function', () => {
				expect(new Profile('a').responder)
				.to
				.be
				.instanceof(Function)
			})

			it('Should set the responder', () => {
				const p = new Profile('b').responder('some-value')
				expect(p.data.responder)
				.to
				.equal('some-value')
			})
		})
	})
})
