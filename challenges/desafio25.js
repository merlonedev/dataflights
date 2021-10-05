db.voos.deleteMany({
  litrosCombustivel: { $lte: 400 },
  "empresa.nome": "AZUL",
}, {
  acknowledged: 0,
});
