db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find(
    { "empresa.nome": "PASSAREDO", natureza: "Doméstica" },
  ).count(),
});

db.resumoVoos.find(
  {}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
).limit(1);
