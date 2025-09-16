const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    data: { type: Date, required: true },
    hora: { type: String, required: true },
    paciente: { type: String, required: true },
    usuario: { type: String, required: true } // Adicione este campo!
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;