export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d602ff9951064b577fc9da0',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-a9hrh8nb',
                  apiId: 'ed5b50c9-657b-493e-89ca-c2a26537a171'
                },
                {
                  buildHookId: '5d602ff9230a163b840c0d57',
                  title: 'Portfolio Website',
                  name: 'sanity-test-web-2fj6q6z4',
                  apiId: '3a2bb79f-6777-4714-ab38-b77c89a1c9cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WalkerFrederick/sanity-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-test-web-2fj6q6z4.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
