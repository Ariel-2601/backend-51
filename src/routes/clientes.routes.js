import { Router } from "express";
import { obtenerClientes, obtenerClientes, registrarCliente,eliminarCliente, actualizarClientePatch } from "../controllers/clientes.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/clientes", obtenerClientes);

// Ruta para obtener un cliente por su ID
router.get("/cliente/:id_cliente", obtenerClientes);

// Ruta para registrar un nuevo Cliente
router.post('/registrarcliente', registrarCliente);

// Ruta para eliminar un cliente por su ID
router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

// Ruta para actualizar parcialmente un cliente por su ID
router.patch('/actualizarcliente/:id_cliente', actualizarClientePatch);

export default router;