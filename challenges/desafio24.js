db.voos.findOne(
  {
    litrosCombustivel: {
      $exists: true,
      $not: { $gt: 600 },
      $nin: ["GOL", "AZUL"],
    },
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
