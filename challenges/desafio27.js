const totalPassaredo = db.voos.find({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica"
}).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: totalPassaredo
});
db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0});
