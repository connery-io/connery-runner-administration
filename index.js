const RefreshConnectors = require("./actions/RefreshConnectors.js");

module.exports = {
    title: 'Connery Runner Administration',
    description: 'Connery Runner Administration connector for Connery',
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
            email: 'contact@connery.io',
        }
    ],
    connery: {
        runnerVersion: '1',
    }
};
