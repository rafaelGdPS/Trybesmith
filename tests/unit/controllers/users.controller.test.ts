import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import usersService from '../../../src/service/users.service';
import userMock from '../../mocks/user.mock';
import userController from '../../../src/controller/user.controller';

chai.use(sinonChai);

describe('UsersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testando buscando usuario', async function () {
    sinon.stub(usersService, 'getAll').resolves({
      status: 'SUCCESSFUL',
      data: userMock.mockUsers
    })

    await userController.getAll(req, res)

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(userMock.mockUsers)

  } )

});
