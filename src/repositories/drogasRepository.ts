import { Drogas } from './../entities/drogas';
import { AppDataSource } from "../database/dataSource";


export const drogasRepository = AppDataSource.getRepository(Drogas);