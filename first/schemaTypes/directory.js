// File: .../first/schemas/directory.js
export default {
  name: 'directory',
  title: 'Village Directory',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., Gram Panchayat, Health, Education',
    },
    {
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'role', type: 'string', title: 'Role / Designation'},
            {name: 'phone', type: 'string', title: 'Phone Number'},
          ],
        },
      ],
    },
  ],
}