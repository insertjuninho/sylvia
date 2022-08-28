import { laudoRepository } from './../repositories/laudoRepository';
import { laudoService } from './../services/laudoService';

it('FAIL: Find Customer by Id', async () => {
      const laudo = new laudoService();
      await laudo.createLaudo({
        "codigo_amostra": "12345678",
        "cocaina": "0,678",
        "anfetamina": "0,1",
        "metanfetamina": "0,1",
        "mda": "0,1",
        "mdma": "0",
        "THC": "0,1",
        "morfina": "0,1",
        "codeina": "0,1",
        "heroina": "0,1",
        "benzoilecgonina": "0",
        "cocaetileno": "0",
        "norcocaina":"0"}
      );
  });