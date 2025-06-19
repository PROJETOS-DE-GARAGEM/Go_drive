import { Request, Response } from "express";
import { CreatePreferenceService } from "../services/CreatePreferenceService";
import { PreferenceRequest } from "../types/payment.types";

class CreatePreferenceController {
  async handle(req: Request, res: Response){

  const { id, title, quantity, price } = req.body as PreferenceRequest;

		if (!id || !title || !quantity || !price) {
    return res.status(400).json({error: 'Campos obrigatórios ausentes.'});
		}

		// const origin = req.headers.origin || 'http://localhost:3333';
    // if (!origin || typeof origin !== "string") {
    //   return res.status(400).json({ error: "Header 'origin' ausente ou inválido." });
    // }


		const createPreferenceService = new CreatePreferenceService();
		try{
			const order = await createPreferenceService.exec({
				id,
				title,
				quantity,
				price,
			});
			
			return res.status(200).json({ order })
			} catch (error){
				return res.status(500).json({ error: 'Erro ao criar pedido.' });
			}
    }
}

export { CreatePreferenceController }