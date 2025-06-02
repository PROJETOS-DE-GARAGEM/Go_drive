import { Preference } from "mercadopago"
import { client } from "../config/mercado-pago";
import { PreferenceRequest } from "../types/payment.types";

class CreatePreferenceService {
    async exec(data: PreferenceRequest, origin: string){

      try {
        const preference = new Preference(client);

        const createdPreference = await preference.create({
          body: {
            external_reference: data.external_reference,
            items: [
              {
            id: data.id,
            title: data.title,
            quantity: data.quantity,
            currency_id: 'BRL',
            unit_price: data.price,
            category_id: "category",
              }
          ],
          payment_methods: {
            excluded_payment_types: [
              { id: "ticket" },
              { id: "bank_transfer" },
              { id: "atm" },
            ],
            installments: 12,
          },
          auto_return: "all",
          back_urls: {
            success: `godrive://checkout/congrats?status=approved`,
            failure: `godrive://checkout/congrats?status=failure`,
          },
        }
      });

      if (!createdPreference.id) {
      throw new Error("Falha ao criar preferência");
      }

      return createdPreference.init_point;

    } catch (error){
      console.log(error);
    }
  }
}

export { CreatePreferenceService }