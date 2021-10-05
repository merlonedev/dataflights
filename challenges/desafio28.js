const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";
const totalLatam = db.voos.find({
  "empresa.nome": LATAM_AIRLINES_BRASIL,
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: LATAM_AIRLINES_BRASIL,
  totalVoosDomesticos: totalLatam,
});
db.resumoVoos.findOne({ empresa: LATAM_AIRLINES_BRASIL }, { _id: 0 });
