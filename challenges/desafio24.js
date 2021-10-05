db.voos.find({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lte: 600 } },
    { $or: [
      { "empresa.nome": { $ne: "GOL" } },
      { "empresa.nome": { $ne: "AZUL" } },
    ] },
  ],
}, 
{ 
  _id: false,
  vooId: true,
  "empresa.nome": true,
  litrosCombustivel: true,
}).limit(1);