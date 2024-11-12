import Currency from '../../general/enum/currency';

export class ListingEntity {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: Currency;
    location: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, title: string, description: string, price: number, location: string, currency: Currency.EGP | Currency.USD = Currency.USD) {
        if (!Object.values(Currency).includes(currency)) {
            throw new Error(`This currency "${currency}" is not supported`);
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