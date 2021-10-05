const empresa = "LATAM AIRLINES BRASIL";

const totalVoosDomesticos = db.voos.find({
  "empresa.nome": empresa,
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos,
});

db.resumoVoos.findOne(
  { empresa },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
