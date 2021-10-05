db.voos.findOne({
  litrosCombustivel: { $exists: true, $not: { $gt: 600 } },
  "empresa.nome": { $nin: ["GOL", "AZUL"] },
},
{
  vooId: 1,
  litrosCombustivel: 1,
  "empresa.nome": 1,
  _id: 0,
});
