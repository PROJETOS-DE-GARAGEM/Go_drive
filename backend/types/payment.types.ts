
export interface PreferenceRequest {
    id: string;
    title: string;
    quantity: number;
    price: number;
    external_reference?: string;
}