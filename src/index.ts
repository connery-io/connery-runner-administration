import { PluginDefinition } from '@connery-io/sdk';
import refreshPluginCache from './actions/refreshPluginCache';

const plugin: PluginDefinition = {
  title: 'Connery Runner Administration',
  description: 'This plugin provides actions to admin the Connery Runner.',
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
