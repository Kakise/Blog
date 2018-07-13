const path = require("path");
const slugify = require("slugify");

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;

    const blogPostTemplate = path.resolve(`src/templates/post.js`);

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              path
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: slugify(node.frontmatter.title),
                component: blogPostTemplate,
                context: {}, // additional data can be passed via context
            });
        });
    });
};