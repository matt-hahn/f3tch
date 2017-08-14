import {expect} from 'chai'

// Helpers
import modes from '../../src/constants/modes.constants'

// Testing module
import {checkMode, prepareMode} from '../../src/attributes/mode'

describe('attributes/mode', () => {
	describe('checkMode', () => {
		it('Should be a function', () => {
			expect(checkMode)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return null', () => {
			expect(checkMode('Never going to be an option for mode AWIFEAPWEOFK'))
				.to
				.be
				.null
		})

		it('Should return mode', () => {
			expect(checkMode(modes[0]))
				.to
				.equal(modes[0])
		})
	})

	describe('prepareMode', () => {
		it('Should be a function', () => {
			expect(prepareMode)
				.to
				.be
				.instanceOf(Function)
		})

		it('Should return null', () => {
			expect(prepareMode())
				.to
				.be
				.null
		})

		it('Should return valid mode #1', () => {
			expect(prepareMode(modes[0]))
				.to
				.equal(modes[0])
		})

		it('Should return valid mode #2', () => {
			expect(prepareMode(null, modes[0]))
				.to
				.equal(modes[0])
		})

		it('Should return valid mode #3', () => {
			expect(prepareMode(modes[0], modes[1]))
				.to
				.equal(modes[1])
		})
	})
})
