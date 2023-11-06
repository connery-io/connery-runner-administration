import { PluginDefinition } from '@connery-io/sdk';
import refreshPluginCache from './actions/refreshPluginCache';

const plugin: PluginDefinition = {
  title: 'Connery Runner Administration',
  description: 'This connector provides actions to manage the Connery Runner service.',
  actions: [refreshPluginCache],
  configurationParameters: [
    {
      key: 'runnerUrl',
      title: 'Runner URL',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'runnerApiKey',
      title: 'Runner API Key',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  maintainers: [
    {
      name: 'Connery',
      email: 'support@connery.io',
    },
  ],
  connery: {
    runnerVersion: '0',
  },
};
export default plugin;
