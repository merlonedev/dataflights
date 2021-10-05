db.voos.find({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lte: 600 } },
    { $nor: [{ "empresa.nome": { $in: ["GOL", "AZUL"] } }] },
  ],
}, 
{ 
  _id: false,
  vooId: true,
  "empresa.nome": true,
  litrosCombustivel: true,
}).limit(1);