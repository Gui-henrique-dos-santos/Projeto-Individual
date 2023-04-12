var database = require("../database/config");

function rank() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function rank(): ")
    var instrucao = `
    SELECT(SELECT count(nomePersonagem) FROM personagem join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Xerife Woody')  AS 'Woody',
	(SELECT count(nomePersonagem) FROM personagem  join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Buzz Lightyear')  AS 'Buzz',
	(SELECT count(nomePersonagem) FROM personagem  join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Jessie')  AS 'jessie',
	(SELECT count(nomePersonagem) FROM personagem  join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Sr. Cabeça de Batata')  AS 'Batata',
	(SELECT count(nomePersonagem) FROM personagem  join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Rex')  AS 'Rex',
    (SELECT count(nomePersonagem) FROM personagem  join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Slinky')  AS 'Slinky',
	(SELECT count(nomePersonagem) FROM personagem  join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Porquinho')  AS 'Porquinho',
	(SELECT count(nomePersonagem) FROM personagem  join usuario on (idpersonagem = fk_personagem) WHERE nomePersonagem = 'Betty')  AS 'Betty'; `
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    rank
}
