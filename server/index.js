const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const emailValidator = require('email-validator'); // Adicionado

const app = express();
const PORT = 5000;

// Configurando o transportador SMTP do SendGrid
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey', // Sempre use "apikey" como usuário para SendGrid SMTP
        pass: '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', // Chave da API do SendGrid
    },
});

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Permite requisições do React
    methods: ['GET', 'POST'],        // Permite os métodos GET e POST
}));

app.post('/send-email', async (req, res) => {
    const { email, phone } = req.body;

    // Validação básica do e-mail
    if (!emailValidator.validate(email)) {
        return res.status(400).send({ status: 'error', message: 'E-mail inválido!' });
    }

    const mailOptions = {
        from: 'lnomoura@minha.fag.edu.br',
        to: email,
        subject: 'Obrigado por entrar em contato!',
        text: `Olá! Recebemos seu número (${phone}).`,
        html: `<p>Olá!</p><p>Recebemos seu número <strong>${phone}</strong>.</p>`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado:', info);
        res.status(200).send({ status: 'success', message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).send({ status: 'error', message: error.toString() });
    }
});

app.post('/email-status', (req, res) => {
    const events = req.body; // Recebe eventos do SendGrid

    events.forEach(event => {
        console.log(`Evento recebido: ${event.event}, E-mail: ${event.email}`);

        if (event.event === 'dropped') {
            console.error(`E-mail descartado: ${event.reason}`);
        }

        if (event.event === 'bounce') {
            console.error(`E-mail rejeitado: ${event.reason}`);
        }

        if (event.event === 'delivered') {
            console.log(`E-mail entregue com sucesso: ${event.email}`);
        }
    });

    res.status(200).send({ message: 'Webhook recebido!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});