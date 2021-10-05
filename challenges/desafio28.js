const nat = "Doméstica";
const emp = "LATAM AIRLINES BRASIL";
const qnt = db.voos.find({ natureza: nat, "empresa.nome": emp }).count();

db.resumoVoos.insertOne({
  empresa: emp,
  totalVoosDomesticos: qnt,
});

db.resumoVoos.findOne({ empresa: emp }, { _id: 0 });