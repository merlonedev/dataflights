const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ 
  empresa, 
  totalVoosDomesticos: db.voos.find({ 
    natureza: "Doméstica", 
    "empresa.nome": empresa, 
  }).count(), 
});

db.resumoVoos.findOne({ empresa }, { _id: 0 });