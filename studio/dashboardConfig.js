export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61ec014a4855d8ef052353ec',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6rc2aepf',
                  apiId: '2e57158f-2d41-45d0-93eb-7bacdcea476a'
                },
                {
                  buildHookId: '61ec014a83f671fcf10b45c4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-bof27c81',
                  apiId: '7adf428d-3e2d-44bd-a98c-6c4c8829a672'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barakaben/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-bof27c81.netlify.app', category: 'apps'}
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
