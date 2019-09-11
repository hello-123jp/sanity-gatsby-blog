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
                  buildHookId: '5d7922540c50d686fb682036',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y2xqovs5',
                  apiId: '09adb2e7-7639-490e-83c9-780c3d3f0016'
                },
                {
                  buildHookId: '5d79225440dc617df684aaf6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1wihigt8',
                  apiId: '307c19bd-c8ff-4f1d-8337-0db7f2c25631'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hello-123jp/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1wihigt8.netlify.com', category: 'apps'}
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
