import { laudoService } from './../services/laudoService';
import { Request, Response } from "express";


export class laudoController {

    async handle(request: Request, response: Response){
        const { codigo_amostra, cocaina, anfetamina, metanfetamina, mda, mdma, THC, morfina, codeina, heroina, benzoilecgonina, cocaetileno, norcocaina } = request.body;

        const service = new laudoService();

        const result = await service.createLaudo({codigo_amostra, cocaina, anfetamina, metanfetamina, mda, mdma, THC, morfina, codeina, heroina, benzoilecgonina, cocaetileno, norcocaina});

        if(result instanceof Error) {
            return response.status(404).json(result.message);
        }

        return response.json(result);
    }

    async find(request: Request, response: Response){

        const service = new laudoService();

        const result = await service.findDroga();

        try {
            const result = await service.findDroga();
            if(result.length == 0){
                response.json({"Droga": "Ainda não foi testada nenhum tipo de droga"})
            }
        } catch (error) {
            
            if(result instanceof Error) {
                return response.status(404).json(result.message);
            }
        }

        return response.json(result);
    }
}