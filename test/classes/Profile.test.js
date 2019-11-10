import {expect} from 'chai';

// Testing modules
import Profile from '../../src/classes/Profile';

describe('classes/Profile', () => {
  it('Should be a class function', () => {
    expect(Profile).to.be.instanceOf(Function);
  });

  describe('Static properties', () => {
    describe('DEFAULT_PROFILE', () => {
      it('Should be an object', () => {
        expect(Profile.DEFAULT_PROFILE).to.be.instanceOf(Object);
      });
    });
  });

  describe('Instance properties', () => {
    describe('data', () => {
      it('Should be an object', () => {
        expect(new Profile().data).to.be.instanceof(Object);
      });

      it('Should be the same as the DEFAULT_PROFILE', () => {
        expect(new Profile().data).to.deep.equal({
          ...Profile.DEFAULT_PROFILE,
        });
      });
    });

    describe('constructor', () => {
      it('Should create an instance of profile', () => {
        expect(new Profile()).to.be.instanceof(Object);
      });
    });

    describe('url', () => {
      it('Should be a function', () => {
        expect(new Profile().url).to.be.instanceof(Function);
      });

      it('Should set the url', () => {
        const p = new Profile().url('some-value');
        expect(p.data.url).to.equal('some-value');
      });
    });

    describe('query', () => {
      it('Should be a function', () => {
        expect(new Profile().query).to.be.instanceof(Function);
      });

      it('Should set the query', () => {
        const p = new Profile().query('some-value');
        expect(p.data.query).to.deep.equal(['some-value']);
      });
    });

    describe('body', () => {
      it('Should be a function', () => {
        expect(new Profile().body).to.be.instanceof(Function);
      });

      it('Should set the body', () => {
        const p = new Profile().body('some-value');
        expect(p.data.body).to.equal('some-value');
      });
    });

    describe('headers', () => {
      it('Should be a function', () => {
        expect(new Profile().headers).to.be.instanceof(Function);
      });

      it('Should set the headers', () => {
        const p = new Profile().headers('some-value');
        expect(p.data.headers).to.deep.equal(['some-value']);
      });
    });

    describe('mode', () => {
      it('Should be a function', () => {
        expect(new Profile().mode).to.be.instanceof(Function);
      });

      it('Should set the mode', () => {
        const p = new Profile().mode('some-value');
        expect(p.data.mode).to.equal('some-value');
      });
    });

    describe('credentials', () => {
      it('Should be a function', () => {
        expect(new Profile().credentials).to.be.instanceof(Function);
      });

      it('Should set the credentials', () => {
        const p = new Profile().credentials('some-value');
        expect(p.data.credentials).to.equal('some-value');
      });
    });

    describe('responder', () => {
      it('Should be a function', () => {
        expect(new Profile().responder).to.be.instanceof(Function);
      });

      it('Should set the responder', () => {
        const p = new Profile().responder('some-value');
        expect(p.data.responder).to.equal('some-value');
      });
    });
  });
});
