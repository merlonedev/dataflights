db.voos.find({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lte: 1000 } },
  ],
}, 
{ 
  _id: false,
  vooId: true,
  litrosCombustivel: true,
}).limit(1);
