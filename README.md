# teste-minu-co


##### Disponível em: [GitHub](https://github.com/estersilvade/teste-minu-com)

##### Foi desenvolvido por [Ester Silva](https://www.linkedin.com/in/ester-silvade/)

##### Apresentação no postman [Postman](https://documenter.getpostman.com/view/17759887/UVXdQeXR)

<br><br>

Esse projeto foi desenvolvido para o processo seletivo da _Minu.co_.

O objetivo è  manter e
evoluir o software de controle de estoque de produtos.



<br>

## Pré requisitos

<br>

- NodeJs - v10.19.0 - acesse o site oficial para mais informações: https://nodejs.org/en/
- Npm - 6.14.4 - acesse o site oficial para mais informações: https://www.npmjs.com/
- mongoose - acesse o site oficial para mais informações: https://account.mongodb.com/


<br>

## Desenvolvimento da Proposta 

<br>



- Para desenvolver da Proposta foi criada uma arquitetura _MVC_ :

  Model (modelo) View (visão) e Controller (Controle) que facilita a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.


- Baseado no conceito do _CRUD_

  permitindo ao usuário:

  ✅ C: Create (criar) - criar um novo registro

    👁 R: Read (ler) - ler (exibir) as informações de um registro

  ♻️ U: Update (atualizar) - atualizar os dados do registro

  ❌ D: Delete (apagar) - apagar um registro

  - MongooDB Para armazenamento de dados 

  - O node.js tornando  possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução

 

<br>

## Dependências utilizadas 
- `npm istall` para o gerenciamento de pacotes
permite instalar, desinstalar e atualizar dependências em uma aplicação. 


 - `bcrypt` como um método de criptografia do tipo hash para senhas  foi utilizado.  

  - `cors` como um mecanismo que permite que recursos restritos em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence o recurso que será recuperado.
 
- `dontenv` utilizada para orquestrar as variáveis ambiente de um projeto. O nome dela sugere o arquivo em que as informações ficarão, dot. 

- `express` utilizada como framework fornece recursos mínimos para construção do servidor web.

- `jsonwebtoken` para a criação de dados com assinatura opcional e ou criptografia cujo payload contém o JSON que afirma algum número de declarações. Os tokens são assinados usando um segredo privado ou uma chave.

- `nodemon` para reiniciar o processo automaticamente e fazer com que as alterações sejam ativadas.


<br>


<br>

## Executar projeto

<br>

Com a API criada e pré requisitos instalados, execute o comando abaixo para instalar as dependências do projeto:

`npm install`

Após finalizar as instalações, execute o comando abaixo para iniciar o projeto:

`npm start`

Verifique se a mensagem <br>
`Serviço estarodando na porta XXXX .` <br>
`Banco de Dados conectado  .`

 aparece no terminal, indicando que o serviço iniciou corretamente.

O endereço de acesso local é: `http://localhost:9057`.

<br>

## Conhecimentos adquiridos

<br>

- Estruturar um projeto MVC

- Usar o jsonwebtoken

- Padrão URL

- Tratamento de erros

- Algumas boas práticas de programação

<br>

## Referências utilizadas para estudo

<br>

- https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/

- https://youtu.be/l4Wdc_4W54w
