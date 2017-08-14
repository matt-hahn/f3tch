import {expect} from 'chai'

// Helpers
import credentials from '../../src/constants/credentials.constants'

// Testing module
import {checkCredentials, prepareCredentials} from '../../src/attributes/credentials'

describe('attributes/credentials', () => {
	describe('checkCredentials', () => {
		it('Should be a function', () => {
			expect(checkCredentials)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return null', () => {
			expect(checkCredentials('Never going to be an option for credentials AWIFEAPWEOFK'))
				.to
				.be
				.null
		})

		it('Should return credentials', () => {
			expect(checkCredentials(credentials[0]))
				.to
				.equal(credentials[0])
		})
	})

	describe('prepareCredentials', () => {
		it('Should be a function', () => {
			expect(prepareCredentials)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return null', () => {
			expect(prepareCredentials())
				.to
				.be
				.null
		})

		it('Should return valid credentials #1', () => {
			expect(prepareCredentials(credentials[0]))
				.to
				.equal(credentials[0])
		})

		it('Should return valid credentials #2', () => {
			expect(prepareCredentials(null, credentials[0]))
				.to
				.equal(credentials[0])
		})

		it('Should return valid credentials #3', () => {
			expect(prepareCredentials(credentials[0], credentials[1]))
				.to
				.equal(credentials[1])
		})
	})
})
