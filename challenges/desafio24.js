db.voos.findOne({
  litrosCombustivel: { $lte: 600, $exists: 1 },
  "empresa.nome": { $nin: ["GOL", "AZUL"] },
}, {
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
});
