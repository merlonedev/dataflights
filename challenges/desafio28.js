db.resumoVoos.insertOne(
    {
        empresa: "LATAM AIRLINES BRASIL",
        totalVoosDomesticos: db.voos.find(
            {
                "empresa.nome": "LATAM AIRLINES BRASIL",
                natureza: "Doméstica",
            },
        ).count(),
    },
);

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { id: 0 });
