db.voos.find(
  { litrosCombustivel: {
    $lt: 600,
    $nin: ["GOL", "AZUL"],
    $exists: 1,
  } },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
).limit(1); 
