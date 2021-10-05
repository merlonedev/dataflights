const companyName = "LATAM AIRLINES BRASIL";
const countLatam = db.voos.find(
  {
    "empresa.nome": companyName,
    natureza: "Doméstica",
  },
).count();

db.resumoVoos.insertOne(
  {
    empresa: companyName,
    totalVoosDomesticos: countLatam,
  },
);

db.resumoVoos.find(
  {
    empresa: companyName,
  },
  {
    _id: 0,
  },
);