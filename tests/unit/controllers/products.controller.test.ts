import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/product.mock';
import productsService from '../../../src/service/products.service';
import productsController from '../../../src/controller/product.controller'

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  describe('Testando função insertProduct', function () {
    it('Testando se ao receber dados corretos a função cadastra', async function () {
      req.body =  productMock.productValidRequest
      sinon.stub(productsService, 'insertProducts').resolves({
        status: 'CREATED',
        data: productMock.productRegister
      })

      await productsController.insertProduct(req, res)

      expect(res.status).to.have.been.calledWith(201)
      expect(res.json).to.have.been.calledWith(productMock.productRegister)
    })
  })

});
