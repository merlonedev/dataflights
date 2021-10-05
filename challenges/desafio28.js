const nomeEmpresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: nomeEmpresa,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": nomeEmpresa,
    natureza: "Doméstica",
  }),
});

db.resumoVoos.find({ empresa: nomeEmpresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });