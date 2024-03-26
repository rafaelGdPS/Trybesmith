import { expect } from 'chai';
import sinon from 'sinon';
import userMock from '../../mocks/user.mock';
import usersService from '../../../src/service/users.service';
import UserModel from '../../../src/database/models/user.model';

describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });
  describe('Testando a função  getAll', function ( ) {
    it('Testando retorno da funçao getall', async function () {
      const mockReturn =  UserModel.bulkBuild(userMock.mockFindAll)

      sinon.stub(UserModel, 'findAll').resolves(mockReturn)

      const serviceResponse = await usersService.getAll()

      expect(serviceResponse.status).to.equal('SUCCESSFUL')
      // expect(serviceResponse.data).to.have.key('productIds')
    })
  })
});
