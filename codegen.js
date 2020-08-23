module.exports = {
  schema: [
      {
        'https://right-goldfish-91.hasura.app/v1/graphql': {
              headers: {
                  Authorization: 'Bearer ' + process.env.AUTH_TOKEN,
              },
          },
      },
  ],
  documents: ['./src/graphql/**/*.ts'],
  overwrite: true,
  generates: {
      './src/type/graphql.tsx': {
          plugins: [
              'typescript',
              'typescript-operations',
              'typescript-react-apollo',
          ],
          config: {
              skipTypename: false,
              withHooks: true,
              withHOC: false,
              withComponent: false,
          },
      },
      './graphql.schema.json': {
          plugins: ['introspection'],
      },
  },
};
