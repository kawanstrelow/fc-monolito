import express, { Request, Response } from "express";
import ClientAdmFacadeFactory from "../../../modules/client-adm/factory/client-adm.facade.factory";
import ClientRepository from "../../../modules/client-adm/repository/client.repository";
import AddClientUseCase from "../../../modules/client-adm/usecase/add-client/add-client.usecase";
import ClientAdmFacade from "../../../modules/client-adm/facade/client-adm.facade";


export const clientRoute = express.Router();

clientRoute.post("/", async (req: Request, res: Response) => {
  
  try {

    // const repository = new ClientRepository();
    // const addUseCase = new AddClientUseCase(repository);
    // const facade = new ClientAdmFacade({
    //   addUsecase: addUseCase,
    //   findUsecase: undefined,
    // });

    const facade = ClientAdmFacadeFactory.create();

    const clientInputDto =  {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
      };

    await facade.add(clientInputDto);
    res.status(200).send();


    /*const useCase = new AddClientUseCase(new ClientRepository());
    const clientInputDto =  {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
      };

    const output = await useCase.execute(clientInputDto);
    res.send(output);*/
  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }
});