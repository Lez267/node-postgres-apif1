const models = require('../database/models');

// PILOTOS F1
const getAllPilotos = async (req, res) => {
  try {
    const pilotos = await models.PilotosF1.findAll();
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
    const piloto = await models.PilotosF1.create(req.body);
    return res.status(201).json({ piloto });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePiloto = async (req, res) => {
  try {
    const piloto = await models.PilotosF1.findByPk(req.params.id);
    if (!piloto) return res.status(404).json({ error: 'Piloto no encontrado' });
    await piloto.update(req.body);
    return res.status(200).json({ piloto });
  } catch (error) {
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

// EXPORT
module.exports = {
  getAllPilotos,
  getPilotoById,
  createPiloto,
  updatePiloto,
  deletePiloto
};
