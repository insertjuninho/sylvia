
## Documentação da API

### Isso dever se realizado para conseguir usar o projeto local

    1 - npm install -D (Para instalar as dependencias de dev)
    2 - Você tem que ter o banco mysql instalado na sua máquina
    3 - npm run dev (Para executar o projeto)
    4- Para executar as migrations rode esse comando ( npm run typeorm -- migration:run -d src/database/dataSource.ts )

#### Cadastro na plataforma

```http
 POST /register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` |  |
| `senha`      | `string` |  |


#### LOgin na plataforma

```http
 POST /auth
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` |  |
| `senha`      | `string` |  |

#### Testa as drogas é retorna um laudo POSITIVO OU NEGATIVO

```http
  POST /laudo
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token é gerado quando você realiza o login |
body    | json | 
{"codigo_amostra": "12345678",
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




#### Retorna todas as drogas testadas

```http
  GET /findDrogas
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. token é gerado quando você realiza o login |


