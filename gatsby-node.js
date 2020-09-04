const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: 'https://letmeseemysite.com/about',
    toPath: 'https://letmeseemysite.com/who-we-are',
    isPermanent: true,
    force: true,
  });

  const postTemplate = path.resolve('src/templates/BlogPost__Page.js');

  return graphql(`
    {
      allMdx {
        edges {
          node {
            body
            id
            timeToRead
            frontmatter {
              path
              date
              title
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      });
    });
  });
};
