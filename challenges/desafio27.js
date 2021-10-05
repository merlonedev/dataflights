const totalVoosDomesticos = db.voos.find({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos,
});

db.resumoVoos.find(
  null,
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
