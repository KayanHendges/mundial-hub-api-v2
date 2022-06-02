"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTransporterUseCase = exports.updateTransporterController = void 0;
const PrismaTransporterRepository_1 = require("../../../repositories/Transporters/implementations/PrismaTransporterRepository");
const UpdateTransporterController_1 = require("./UpdateTransporterController");
const UpdateTransporterDataValidate_1 = require("./UpdateTransporterDataValidate");
const UpdateTransporterUseCase_1 = require("./UpdateTransporterUseCase");
const updateTransporterDataValidate = new UpdateTransporterDataValidate_1.UpdateTransporterDataValidate;
const transporterRepository = new PrismaTransporterRepository_1.PrismaTransporterRepository;
const updateTransporterUseCase = new UpdateTransporterUseCase_1.UpdateTransporterUseCase(updateTransporterDataValidate, transporterRepository);
exports.updateTransporterUseCase = updateTransporterUseCase;
const updateTransporterController = new UpdateTransporterController_1.UpdateTransporterController(updateTransporterUseCase);
exports.updateTransporterController = updateTransporterController;
