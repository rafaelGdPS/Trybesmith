import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/service/login.service';
import UserModel from '../../../src/database/models/user.model';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando sem username no corpo da requisiçaõ', async function () {
    const parameters = loginMock.requestWithoutUsername;

    const serviceResponse = await loginService.login(parameters)

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });

  })
  it('Testando sem password no corpo da requisiçaõ', async function () {
    const parameters = loginMock.requestWithoutPassword;

    const serviceResponse = await loginService.login(parameters)

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });

  })
  it('Testando sem username valido', async function () {
    const parameters = loginMock.invalidUsernamedRequest;

    const serviceResponse = await loginService.login(parameters)

    expect(serviceResponse.status).to.eq('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "Username or password invalid" });

  })
  it('Testando sem password valido', async function () {
    const parameters = loginMock.invalidPasswordRequest;

    const serviceResponse = await loginService.login(parameters)

    expect(serviceResponse.status).to.eq('UNAUTHORIZED');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "Username or password invalid" });

  })
  it('Testando com password e username validos, retorna token', async function () {
    const parameters = loginMock.validRequest;
    const mockFindOne = UserModel.build(loginMock.userExist)

    sinon.stub(UserModel, 'findOne').resolves(mockFindOne)


    const serviceResponse = await loginService.login(parameters)

    expect(serviceResponse.status).to.eq('SUCCESSFUL');
    expect(serviceResponse.data).to.have.key('token');
   

  })

});
