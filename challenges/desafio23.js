db.voos.findOne(
  { litrosCombustivel:
    { $exists: true, $not: { $gt: 1000 } },
  },
  { vooId: 1, litrosCombustivel: 1, _id: 0 },
);
