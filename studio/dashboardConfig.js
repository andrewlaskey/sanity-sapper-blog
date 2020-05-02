export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eadcb7e8aa2b7f00c91fcba',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-uf21t3pz',
                  apiId: '068fdd98-8859-4304-a7f8-abf105440861'
                },
                {
                  buildHookId: '5eadcb7e8aa2b7f4ed91fd3a',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-vtqe5dif',
                  apiId: 'c2824da0-e786-4d8c-a60a-37190b24e9f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrewlaskey/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-vtqe5dif.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
