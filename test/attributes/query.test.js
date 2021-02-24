import {expect} from 'chai';

// Helpers
const query = [
  {
    foo: true,
    baz: {
      value: 'baz',
      separator: '!=',
    },
  },
  () => 'bar=one',
  {
    arrBracket: {
      value: ['1', '2', 3],
      format: 'brackets',
    },
    arrIndex: {
      value: [3, 2, 1],
      format: 'index',
    },
  },
  {},
];

// Testing module
import {
  arrayBrackets,
  parseArray,
  prepareQueryString,
  parseQuery,
  prepareQuery,
} from '../../src/attributes/query';

describe('attributes/query', () => {
  describe('arrayBrackets', () => {
    it('Should be a function', () => {
      expect(arrayBrackets).to.be.instanceOf(Function);
    });

    it('Should return an empty string', () => {
      expect(arrayBrackets()).to.be.equal('');
    });

    it('Should return key with brackets', () => {
      expect(arrayBrackets('brackets')).to.be.equal('[]');
    });

    it('Should return key with indexed brackets', () => {
      expect(arrayBrackets('index', 2)).to.be.equal('[2]');
    });
  });

  describe('parseArray', () => {
    it('Should be a function', () => {
      expect(parseArray).to.be.instanceOf(Function);
    });

    it('Should return parsed string', () => {
      const check = {
        ...query[2].arrBracket,
        key: 'arrBracket',
      };
      expect(parseArray(check)).to.equal(
        'arrBracket[]=1&arrBracket[]=2&arrBracket[]=3'
      );
    });
  });

  describe('prepareQueryString', () => {
    it('Should be a function', () => {
      expect(prepareQueryString).to.be.instanceof(Function);
    });

    expect('Should return parsed string #1', () => {
      expect(prepareQueryString('string', 'value')).to.equal('string=value');
    });

    expect('Should return parsed string #2', () => {
      expect(prepareQueryString('baz', query[0].baz)).to.equal('baz!=baz');
    });

    expect('Should return parsed string #3', () => {
      expect(prepareQueryString('arrIndex', query[2].arrIndex)).to.equal(
        'arrIndex[0]=3&arrIndex[1]=2&arrIndex[2]=1'
      );
    });

    expect('Should return parsed string #4', () => {
      expect(prepareQueryString('key', [1, 2, 3])).to.equal(
        'key=1&key=2&key=3'
      );
    });
  });

  describe('parseQuery', () => {
    it('Should be a function', () => {
      expect(parseQuery).to.be.instanceof(Function);
    });

    it('Should return empty string', () => {
      expect(parseQuery('')).to.equal('');
    });

    it('Should return parsed string #1', () => {
      expect(parseQuery(query[1])).to.equal('bar=one');
    });

    it('Should return parsed string #2', () => {
      expect(parseQuery(query[0])).to.equal('foo=true&baz!=baz');
    });

    it('Should return parsed string #3', () => {
      expect(parseQuery(query[2])).to.equal(
        'arrBracket[]=1&arrBracket[]=2&arrBracket[]=3&arrIndex[0]=3&arrIndex[1]=2&arrIndex[2]=1'
      );
    });
  });

  describe('prepareQuery', () => {
    it('Should be a function', () => {
      expect(prepareQuery).to.be.instanceof(Function);
    });

    it('Should return prepared query', () => {
      expect(prepareQuery(...query)).to.equal(
        '?foo=true&baz!=baz&bar=one&arrBracket[]=1&arrBracket[]=2&arrBracket[]=3&arrIndex[0]=3&arrIndex[1]=2&arrIndex[2]=1'
      );
    });
  });
});
