db.voos.find({ $nor: [{ "aeroportoOrigem.pais": "BRASIL" }] }).count();
