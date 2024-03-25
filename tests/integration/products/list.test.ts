import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testando se retorna a lista de produtos cadastrados', async function () {
    const mockreturn = ProductModel.bulkBuild(productMock.productListDB)

    sinon.stub(ProductModel, 'findAll').resolves(mockreturn)

    const responseService = await chai.request(app).get('/products')

    expect(responseService.status).to.equal(200)
    expect(responseService.body).to .deep.equal(productMock.productListDB)
  })
});
