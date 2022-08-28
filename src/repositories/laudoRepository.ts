import { AppDataSource } from "../database/dataSource";
import { Laudo } from '../entities/Laudo';

export const laudoRepository = AppDataSource.getRepository(Laudo);