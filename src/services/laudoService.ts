import { laudoRepository } from '../repositories/laudoRepository';
import { Laudo } from '../entities/Laudo'
import { drogasRepository } from '../repositories/drogasRepository';

type drogaRequest = {
    codigo_amostra: string;
    cocaina: string;
    anfetamina: string;
    metanfetamina: string;
    mda: string;
    mdma:string;
    THC:string;
    morfina:string;
    codeina:string;
    heroina:string;
    benzoilecgonina:string;
    cocaetileno:string;
    norcocaina:string;
}

export class laudoService {
    
    async createLaudo({ codigo_amostra, cocaina, anfetamina, metanfetamina, mda, mdma, THC, morfina, codeina, heroina, benzoilecgonina, cocaetileno, norcocaina}: drogaRequest):Promise<Laudo | Error>{
   
      let res = [];
        if (codigo_amostra.length <= 8) {
           const insertCocaina = await drogasRepository.create({ "tipo_droga":"cocaina: " + cocaina});
           await drogasRepository.save(insertCocaina);
            if (cocaina >= "0,5") {
               res.push({"cocaina":cocaina});
            }
            const insertAnfetamina = await drogasRepository.create({ "tipo_droga":"anfetamina: " + anfetamina});
            await drogasRepository.save(insertAnfetamina);
            if (anfetamina >= "0,2") {
                res.push({"anfetamina":anfetamina});
             }
             const insertMetanfetamina = await drogasRepository.create({ "tipo_droga":"metanfetamina: " + metanfetamina});
             await drogasRepository.save(insertMetanfetamina);
             if (metanfetamina >= "0,2") {
                res.push({"metanfetamina":metanfetamina});
             }
             const insertMda = await drogasRepository.create({ "tipo_droga":"mda: " + mda});
             await drogasRepository.save(insertMda);
             if (mda >= "0,2") {
                res.push({"mda":mda});
             }
             const insertMdma= await drogasRepository.create({ "tipo_droga":"mdma: " + mdma});
             await drogasRepository.save(insertMdma);
             if (mdma >= "0,2") {
                res.push({"mdma":mdma});
             }
             const insertTHC = await drogasRepository.create({ "tipo_droga":"THC: " + THC});
             await drogasRepository.save(insertTHC);
             if (THC >= "0,05") {
                res.push({"THC": THC});
             }
             const insertMorfina = await drogasRepository.create({ "tipo_droga":"morfina: " + morfina});
             await drogasRepository.save(insertMorfina);
             if (morfina >= "0,2") {
                res.push({"morfina":morfina});
             }
             const insertCodeina = await drogasRepository.create({ "tipo_droga":"codeina: " + codeina});
             await drogasRepository.save(insertCodeina);
             if (codeina >= "0,2") {
                res.push({"codeina": codeina});
             }
             const insertHeroina = await drogasRepository.create({ "tipo_droga":"heroina: " + heroina});
             await drogasRepository.save(insertHeroina);
             if (heroina >= "0,2") {
                res.push({"heroina": heroina});
             }
             const insertBenzoilecgonina = await drogasRepository.create({ "tipo_droga":"benzoilecgonina: " + benzoilecgonina});
             await drogasRepository.save(insertBenzoilecgonina);
             if (benzoilecgonina >= "0,05") {
                res.push({"benzoilecgonina":benzoilecgonina});
             }
             const insertCocaetileno = await drogasRepository.create({ "tipo_droga":"cocaetileno: " + cocaetileno});
             await drogasRepository.save(insertCocaetileno);
             if (cocaetileno >= "0,05") {
                res.push({"cocaetileno":cocaetileno});
             }
             const insertNorcocaina = await drogasRepository.create({ "tipo_droga":"norcocaina: " + norcocaina});
             await drogasRepository.save(insertNorcocaina);
             if (norcocaina >= "0,05") {
                res.push({"norcocaina":norcocaina});
             }
        }else{
            console.log("NEGATIVOS");
        }
       
        const laudoFinal = res.length >= 1 ? "POSITIVO" : "NEGATIVO";
        const insertLaudo = await laudoRepository.create({ "resultado":laudoFinal, "codigo_amostra":codigo_amostra });
        await laudoRepository.save(insertLaudo);
        return insertLaudo;
   }

   async findDroga():Promise< any| Error > {
      const find = await drogasRepository.find();
      return find;
   }

}

