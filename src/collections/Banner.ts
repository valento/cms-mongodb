import { CollectionConfig } from "payload/types";

const Banner: CollectionConfig = {
    slug: 'banner-collection',
    fields: [
        {
           type: 'text',
           name: 'BannerTitle',
           label: 'Banner Title'
        }
    ]
}

export default Banner