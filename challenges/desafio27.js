const qtd = db.voos.find({ 
  $and: [
    { natureza: "Doméstica" }, 
    { "empresa.nome": "PASSAREDO" }] }).count();
db.resumoVoos.insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: qtd,
});
db.resumoVoos.find({ empresa: "PASSAREDO" }, { 
  _id: false,
  empresa: true,
  totalVoosDomesticos: true,
}).limit(1);