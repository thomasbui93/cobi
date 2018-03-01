import CobiRouter from './../../../app/core/api/CobiRouter';
import { expect } from 'chai';
import 'mocha';
import shelljs from 'shelljs';

describe('CobiRouter collectRoutes', () => {
  before(() => {
    shelljs.exec('mkdir tmp');
    shelljs.exec('touch tmp/file1.ts');
    shelljs.exec('touch tmp/file2.ts');
    shelljs.exec('touch tmp/file3.js')
  })

  it('should collect all .ts file in constructor folder', () => {
    const cobiRouter = new CobiRouter(['tmp']);
    expect(cobiRouter.collectRoutes()).to.equal(true);
    const listFiles = ['tmp/file1.ts', 'tmp/file2.ts'];
    expect(cobiRouter.getAvailableRoutes()).to.deep.equal(listFiles);
  });

  after(() => {
    shelljs.exec('rm -rf tmp');
  })
});

describe('CobiRouter collectFile', () => {
  before(() => {
    shelljs.exec('mkdir tmp');
    shelljs.exec('touch tmp/file1.ts');
    shelljs.exec('touch tmp/file2.ts');
    shelljs.exec('touch tmp/file3.js')
  })

  it('should add all .ts file in folder', () => {
    const cobiRouter = new CobiRouter([]);
    const listFiles = ['tmp/file1.ts', 'tmp/file2.ts'];
    expect(cobiRouter.collectFile('tmp')).to.deep.equal(listFiles);
  });

  after(() => {
    shelljs.exec('rm -rf tmp');
  })
});

describe('CobiRouter addRoute', () => {
  before(() => {
    shelljs.exec('mkdir tmp');
    shelljs.exec('touch tmp/file1.ts');
    shelljs.exec('touch tmp/file2.ts');
    shelljs.exec('touch tmp/file3.js')
  })

  it('should add all .ts file in folder', () => {
    const cobiRouter = new CobiRouter([]);
    const listFiles = ['tmp/file1.ts', 'tmp/file2.ts'];
    expect(cobiRouter.addRoute('tmp')).to.deep.equal(true);
    expect(cobiRouter.getAvailableRoutes()).to.deep.equal(listFiles);
  });

  after(() => {
    shelljs.exec('rm -rf tmp');
  })
});

describe('CobiRouter removeRoute', () => {
  before(() => {
    shelljs.exec('mkdir tmp');
    shelljs.exec('touch tmp/file1.ts');
    shelljs.exec('touch tmp/file2.ts');
    shelljs.exec('touch tmp/file3.js')
  })

  it('should remove all .ts file in folder', () => {
    const cobiRouter = new CobiRouter(['tmp']);
    cobiRouter.collectRoutes()
    cobiRouter.removeRoute('tmp');
    expect(cobiRouter.getAvailableRoutes()).to.deep.equal([]);
  });

  after(() => {
    shelljs.exec('rm -rf tmp');
  })
});