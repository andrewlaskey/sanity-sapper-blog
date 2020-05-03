export default {
  name: 'siteLink',
  type: 'document',
  title: 'Site Link',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url'
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'url'
    }
  }
}