const empresaAtual = "LATAM AIRLINES BRASIL";
const qtd = db.voos.find({ 
  $and: [
    { natureza: "Doméstica" }, 
    { "empresa.nome": empresaAtual }] }).count();
db.resumoVoos.insertOne({
    empresa: empresaAtual,
    totalVoosDomesticos: qtd,
});
db.resumoVoos.find({ empresa: empresaAtual }, { 
  _id: false,
  empresa: true,
  totalVoosDomesticos: true,
}).limit(1);