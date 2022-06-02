"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderNoteUseCase = void 0;
class CreateOrderNoteUseCase {
    constructor(createOrderNoteDataValidate, ordersNotesRepository, ordersRepository) {
        this.createOrderNoteDataValidate = createOrderNoteDataValidate;
        this.ordersNotesRepository = ordersNotesRepository;
        this.ordersRepository = ordersRepository;
    }
    async execute(data) {
        try {
            await this.createOrderNoteDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { note } = data;
        const orderExists = await this.ordersRepository.find({ id: note.orderId })
            .catch(err => { throw new Error(err); });
        if (!orderExists) {
            throw new Error(`the order ${note.orderId} does not exists`);
        }
        const { id: createdId } = await this.ordersNotesRepository.save(note)
            .catch(err => { throw new Error(err); });
        if (createdId) {
            return { createdId };
        }
    }
}
exports.CreateOrderNoteUseCase = CreateOrderNoteUseCase;
