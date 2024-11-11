export class ListingEntity {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: 'USD' | 'EGP';
    location: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, title: string, description: string, price: number, location: string, currency: 'USD' | 'EGP' = 'USD') {
        if (currency !== 'USD' && currency !== 'EGP') {
            throw new Error('Currency must be either USD or EGP');
        }
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.currency = currency;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}