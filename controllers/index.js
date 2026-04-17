const models = require('../database/models');
const cloudinary = require('../cloudinary');

// PILOTOS F1
const getAllPilotos = async (req, res) => {
  try {
    const pilotos = await models.PilotosF1.findAll({
      attributes: [
        "id",
        "nombre",
        "equipos",
        "numeros",
        "nacionalidad",
        "victorias",
        "podios",
        "campeonatos",
        "debut",
        "puntos_totales",
        "imagen",
        "createdAt",
        "updatedAt"
      ]
    });

    return res.status(200).json({ pilotos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPilotoById = async (req, res) => {
  try {
    const piloto = await models.PilotosF1.findByPk(req.params.id);
    if (!piloto) return res.status(404).json({ error: 'Piloto no encontrado' });
    return res.status(200).json({ piloto });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createPiloto = async (req, res) => {
  try {
console.log("FILE CREATE:", req.file);
  
    let imageUrl = null;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const piloto = await models.PilotosF1.create({
      nombre: req.body.nombre,
      nacionalidad: req.body.nacionalidad || null,
      equipos: req.body.equipos || null,
      numeros: req.body.numeros || null,

      victorias: req.body.victorias !== "" ? Number(req.body.victorias) : null,
      podios: req.body.podios !== "" ? Number(req.body.podios) : null,
      campeonatos: req.body.campeonatos !== "" ? Number(req.body.campeonatos) : null,
      puntos_totales: req.body.puntos_totales !== "" ? Number(req.body.puntos_totales) : null,

      debut: req.body.debut ? `${req.body.debut}-01-01` : null,

      imagen: imageUrl
    });

    return res.status(201).json({ piloto });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePiloto = async (req, res) => {
  try {
    const piloto = await models.PilotosF1.findByPk(req.params.id);
    if (!piloto) return res.status(404).json({ error: 'Piloto no encontrado' });

    let imageUrl = piloto.imagen;

    console.log("FILE UPDATE:", req.file);

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const updatedData = {
      nombre: req.body.nombre || piloto.nombre,
      nacionalidad: req.body.nacionalidad || piloto.nacionalidad,
      equipos: req.body.equipos || piloto.equipos,
      numeros: req.body.numeros || piloto.numeros,

      victorias: req.body.victorias ? Number(req.body.victorias) : piloto.victorias,
      podios: req.body.podios ? Number(req.body.podios) : piloto.podios,
      campeonatos: req.body.campeonatos ? Number(req.body.campeonatos) : piloto.campeonatos,
      puntos_totales: req.body.puntos_totales ? Number(req.body.puntos_totales) : piloto.puntos_totales,

      debut: req.body.debut || piloto.debut,

      imagen: imageUrl || piloto.imagen
    };

    console.log("UPDATE DATA FINAL:", updatedData);

    await piloto.update(updatedData);

    const fresh = await models.PilotosF1.findByPk(req.params.id);

    return res.status(200).json({ piloto: fresh });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const deletePiloto = async (req, res) => {
  try {
    const piloto = await models.PilotosF1.findByPk(req.params.id);
    if (!piloto) return res.status(404).json({ error: 'Piloto no encontrado' });

    await piloto.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPilotos,
  getPilotoById,
  createPiloto,
  updatePiloto,
  deletePiloto
};
