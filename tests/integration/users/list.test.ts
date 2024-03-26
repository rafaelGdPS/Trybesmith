import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import userMock from '../../mocks/user.mock';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /users', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testando rota buscando usuarios e sua lista de produtos', async function () {
    
    const mockReturn = UserModel.bulkBuild(userMock.mockFindAll)

    sinon.stub(UserModel, 'findAll').resolves(mockReturn)

    const responseService = await chai.request(app).get('/products')
    

    expect(responseService.status).to.equal(200)
    expect(responseService.body).to.length(5)

  })
});
