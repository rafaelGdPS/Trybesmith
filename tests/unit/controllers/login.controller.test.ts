import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginMock from '../../mocks/login.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Token } from '../../../src/types/User';
import loginService from '../../../src/service/login.service';
import loginController from '../../../src/controller/login.controller';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  const messageEmailOrPasswordEmpty = '\"username\" and \"password\" are required';
  const messageEmailOrPasswordInvalid = 'Username or password invalid';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testando com password e username validos, retorna token', async function () {
    req.body = loginMock.validRequest
    const token = { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTcxMTQ3NjAyNX0.J-23tNqJlXDHJrOH2gOPgfrCCwyAiu9PhrnUokeuclg"}
    const serviceResponse: ServiceResponse<Token> = {
      status: 'SUCCESSFUL',
      data: token
    }

    sinon.stub(loginService, 'login').resolves(serviceResponse)

    await loginController.login(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(token);

  })
  it('Testando sem password valido', async function () {
    req.body = loginMock.invalidPasswordRequest

    const serviceResponse : ServiceResponse<Token> = {
      status: "UNAUTHORIZED",
      data: { message: messageEmailOrPasswordInvalid }
    }

    sinon.stub(loginService, 'login').resolves(serviceResponse)

    await loginController.login(req, res)

    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordInvalid });
  })
  it('Testando sem username valido', async function () {
    req.body = loginMock.invalidUsernamedRequest

    const serviceResponse : ServiceResponse<Token> = {
      status: "UNAUTHORIZED",
      data: { message: messageEmailOrPasswordInvalid }
    }

    sinon.stub(loginService, 'login').resolves(serviceResponse)

    await loginController.login(req, res)

    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordInvalid });
  })
  it('Testando sem password no corpo da requisiçaõ', async function () {
    req.body = loginMock.requestWithoutPassword

    const serviceResponse : ServiceResponse<Token> = {
      status: "INVALID_DATA",
      data: { message: messageEmailOrPasswordEmpty }
    }

    sinon.stub(loginService, 'login').resolves(serviceResponse)

    await loginController.login(req, res)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordEmpty });
  })
  it('Testando sem username no corpo da requisiçaõ', async function () {
    req.body = loginMock.requestWithoutUsername

    const serviceResponse : ServiceResponse<Token> = {
      status: "INVALID_DATA",
      data: { message: messageEmailOrPasswordEmpty }
    }

    sinon.stub(loginService, 'login').resolves(serviceResponse)

    await loginController.login(req, res)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordEmpty });
  })

});
