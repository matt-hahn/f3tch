import {expect} from 'chai'

// Testing modules
import Fetch from '../../src/classes/Fetch'

describe('classes/Fetch', () => {
	describe('data', () => {
		it('Should be an object', () => {
			expect(new Fetch('').data)
				.to
				.be
				.instanceOf(Object)
		})

		it('Should have default values', () => {
			expect(new Fetch('').data)
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
				})
		})
	})

	describe('constructor', () => {
		it('Should be a class', () => {
			expect(Fetch)
				.to
				.be
				.instanceof(Function)
		})

		it('Should create an instance of Fetch', () => {
			expect(new Fetch())
				.to
				.be
				.instanceof(Object)
		})
	})

	describe('profile', () => {
		it('Should be a function', () => {
			expect(new Fetch().profile)
				.to
				.be
				.instanceof(Function)
		})

		it('Should set the profile', () => {
			expect(new Fetch().profile('some-value').data.profile)
				.to
				.equal('some-value')
		})
	})

	describe('query', () => {
		it('Should be a function', () => {
			expect(new Fetch().query)
				.to
				.be
				.instanceof(Function)
		})

		it('Should set the query', () => {
			expect(new Fetch().query('some-value').data.query)
				.to
				.deep
				.equal(['some-value'])
		})
	})

	describe('body', () => {
		it('Should be a function', () => {
			expect(new Fetch().body)
				.to
				.be
				.instanceof(Function)
		})

		it('Should set the body', () => {
			expect(new Fetch().body('some-value').data.body)
				.to
				.equal('some-value')
		})
	})

	describe('headers', () => {
		it('Should be a function', () => {
			expect(new Fetch().headers)
				.to
				.be
				.instanceof(Function)
		})

		it('Should set the headers', () => {
			expect(new Fetch().headers('some-value').data.headers)
				.to
				.deep
				.equal(['some-value'])
		})
	})

	describe('mode', () => {
		it('Should be a function', () => {
			expect(new Fetch().mode)
				.to
				.be
				.instanceof(Function)
		})

		it('Should set the mode', () => {
			expect(new Fetch().mode('some-value').data.mode)
				.to
				.equal('some-value')
		})
	})

	describe('credentials', () => {
		it('Should be a function', () => {
			expect(new Fetch().credentials)
				.to
				.be
				.instanceof(Function)
		})

		it('Should set the credentials', () => {
			expect(new Fetch().credentials('some-value').data.credentials)
				.to
				.equal('some-value')
		})
	})

	describe('get', () => {
		it('Should be a function', () => {
			expect(new Fetch().get)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return a promise', () => {
			expect(new Fetch().get())
				.to
				.be
				.instanceOf(Promise)
		})

		it('Should return a response', async () => {
			const response = await new Fetch('http://fake.com').get()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})

	describe('post', () => {
		it('Should be a function', () => {
			expect(new Fetch().post)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return a promise', () => {
			expect(new Fetch().post())
				.to
				.be
				.instanceOf(Promise)
		})

		it('Should return a response', async () => {
			const response = await new Fetch('http://fake.com').post()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})

	describe('put', () => {
		it('Should be a function', () => {
			expect(new Fetch().put)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return a promise', () => {
			expect(new Fetch().put())
				.to
				.be
				.instanceOf(Promise)
		})

		it('Should return a response', async () => {
			const response = await new Fetch('http://fake.com').put()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})

	describe('patch', () => {
		it('Should be a function', () => {
			expect(new Fetch().patch)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return a promise', () => {
			expect(new Fetch().patch())
				.to
				.be
				.instanceOf(Promise)
		})

		it('Should return a response', async () => {
			const response = await new Fetch('http://fake.com').patch()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})

	describe('delete', () => {
		it('Should be a function', () => {
			expect(new Fetch().delete)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return a promise', () => {
			expect(new Fetch().delete())
				.to
				.be
				.instanceOf(Promise)
		})

		it('Should return a response', async () => {
			const response = await new Fetch('http://fake.com').delete()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})

	describe('head', () => {
		it('Should be a function', () => {
			expect(new Fetch().head)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return a promise', () => {
			expect(new Fetch().head())
				.to
				.be
				.instanceOf(Promise)
		})

		it('Should return a response', async () => {
			const response = await new Fetch('http://fake.com').head()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})

	describe('options', () => {
		it('Should be a function', () => {
			expect(new Fetch().options)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return a promise', () => {
			expect(new Fetch().options())
				.to
				.be
				.instanceOf(Promise)
		})

		it('Should return a response', async () => {
			const response = await new Fetch('http://fake.com').options()
			expect(response)
				.to
				.be
				.instanceOf(Object)
		})
	})
})
