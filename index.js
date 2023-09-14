const RefreshConnectors = require("./actions/RefreshConnectorsCache.js");

module.exports = {
    title: 'Connery Runner Administration',
    description: 'This connector provides actions to manage the Connery Runner service.',
    actions: [
        RefreshConnectors
    ],
    configurationParameters: [
        {
            key: 'RunenrUrl',
            title: 'Runner URL',
            type: 'string',
            validation: {
                required: true
            }
        },
        {
            key: 'RunnerApiKey',
            title: 'Runner API Key',
            type: 'string',
            validation: {
                required: true
            }
        },
    ],
    maintainers: [
        {
            name: 'Connery',
            email: 'support@connery.io',
        }
    ],
    connery: {
        runnerVersion: '0',
    }
};
