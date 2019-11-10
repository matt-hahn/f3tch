import {expect} from 'chai';

// Helpers
const bodies = {
  one: () => 'hello',
  two: () => 'world',
};

// Testing module
import {
  checkBodyParser,
  prepareBodyParser,
} from '../../src/attributes/bodyParser';

describe('attributes/body', () => {
  describe('checkBodyParser', () => {
    it('Should be a function', () => {
      expect(checkBodyParser).to.be.instanceOf(Function);
    });

    it('Should return null', () => {
      expect(checkBodyParser(null)).to.be.null;
    });

    it('Should return body #1', () => {
      expect(checkBodyParser(bodies.one)).to.equal(bodies.one);
    });

    it('Should return second body #2', () => {
      expect(checkBodyParser(bodies.two)).to.equal(bodies.two);
    });
  });

  describe('prepareBodyParser', () => {
    it('Should be a function', () => {
      expect(prepareBodyParser).to.be.instanceOf(Function);
    });

    it('Should return null', () => {
      expect(prepareBodyParser()).to.be.null;
    });

    it('Should return first body', () => {
      expect(prepareBodyParser(bodies.one, null)).to.equal(bodies.one);
    });

    it('Should return second body', () => {
      expect(prepareBodyParser(null, bodies.two)).to.equal(bodies.two);
    });

    it('Should return second body again', () => {
      expect(prepareBodyParser(bodies.one, bodies.two)).to.equal(bodies.two);
    });
  });
});
