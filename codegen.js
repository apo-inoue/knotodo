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
        './src/types/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                nonOptionalTypename: true,
                avoidOptionals: true,
                enumsAsTypes: true,
                withHooks: true,
                withHOC: false,
                withComponent: false,
                withRefetchFn: false
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
