import {expect} from 'chai'

// Helpers
const bodies = {
	one: 'hello',
	two: 'world',
}

// Testing module
import {checkBody, prepareBody} from '../../src/attributes/body'

describe('attributes/body', () => {
	describe('checkBody', () => {
		it('Should be a function', () => {
			expect(checkBody)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return null', () => {
			expect(checkBody(null))
				.to
				.be
				.null
		})

		it('Should return body #1', () => {
			expect(checkBody(() => bodies.one))
				.to
				.equal(bodies.one)
		})

		it('Should return second body #2', () => {
			expect(checkBody(bodies.two))
				.to
				.equal(bodies.two)
		})
	})

	describe('prepareBody', () => {
		it('Should be a function', () => {
			expect(prepareBody)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return null', () => {
			expect(prepareBody())
				.to
				.be
				.null
		})

		it('Should return first body', () => {
			expect(prepareBody(bodies.one, null))
				.to
				.equal(bodies.one)
		})

		it('Should return second body', () => {
			expect(prepareBody(null, bodies.two))
				.to
				.equal(bodies.two)
		})

		it('Should return second body again', () => {
			expect(prepareBody(bodies.one, bodies.two))
				.to
				.equal(bodies.two)
		})
	})
})
