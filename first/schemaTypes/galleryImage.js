// File: .../first/schemaTypes/galleryImage.js
export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables smart cropping
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'A short description of the image.',
      validation: Rule => Rule.required(),
    },
    {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
            list: [
                {title: 'Festivals', value: 'festivals'},
                {title: 'Nature', value: 'nature'},
                {title: 'Village Life', value: 'village-life'},
                {title: 'Events', value: 'events'},
            ],
            layout: 'radio'
        }
    }
  ],
}