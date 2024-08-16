import { expect } from 'chai';
import sinon from 'sinon';

import productMock from '../../mocks/product.mock'
import ProductModel from '../../../src/database/models/product.model'
import productsService from '../../../src/service/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  describe('Testando a função inserProducs', function () {
    it('Testando se ao mandar todos os dados corretos ela cadastra produto', async function () {
      const mockCreateReturn =  ProductModel.build( productMock.productRegister)
      
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)

      const serviceResponse = await  productsService.insertProducts( productMock.productValidRequest)

      expect(serviceResponse.status).to.equal('CREATED')
      expect(serviceResponse.data).to.deep.equal(productMock.productRegister)
     
    })
    
  })
});
 