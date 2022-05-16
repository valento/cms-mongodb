import { CollectionConfig } from "payload/types";

const Package: CollectionConfig = {
    slug: 'package-card',
    fields: [
        {
            type: 'text',
            name: 'title',
            label: 'Title'
        },
        {
            type: 'text',
            name: 'promoSticker',
            label: 'Promo Sticker'
        },
        {
            type: 'checkbox',
            name: 'bestSell',
            label: 'best-sell',
            admin: {
                position: 'sidebar'
            }
        },
        {
            type: 'radio',
            name: 'type',
            label: 'Type',
            options: [
                {
                    label: 'Bus',
                    value: 'bus'
                },
                {
                    label: 'Cruise',
                    value: 'cruise'
                },
                {
                    label: 'Event',
                    value: 'event'
                },
                {
                    label: 'Bike',
                    value: 'bike'
                },
            ]
        }
    ]
}

export default Package