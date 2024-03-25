import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao receber o produto, cadastra corretamente', async function () {
    
    const httpRequestBody = productMock.productValidRequest

    const mockReturn = ProductModel.build(productMock.productRegister)

    sinon.stub(ProductModel, 'create').resolves(mockReturn)

    const httpResponse =  await chai.request(app).post('/products').send(httpRequestBody)

    expect(httpResponse.status).to.equal(201)
    expect(httpResponse.body).to.have.keys(['id', 'name', 'price', 'userId'])

  })
});
