"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carros_1 = require("./controladores/carros");
const rotas = (0, express_1.Router)();
rotas.get('/carros', carros_1.listarCarros);
rotas.get('/carro:/id', carros_1.detalharCarros);
rotas.post('/carros', carros_1.cadastrarCarros);
rotas.put('/carros/:id', carros_1.atualizarCarros);
rotas.delete('/carros/:id', carros_1.excluirCarros);
exports.default = rotas;