import { ActionDefinition, ActionContext, OutputParametersObject } from '@connery-io/sdk';
import axios from 'axios';

const action: ActionDefinition = {
  key: 'refreshPluginCache',
  title: 'Refresh plugin cache',
  description: 'Clean the plugin cache on the runner and then download all the plugins again.',
  type: 'delete',
  inputParameters: [],
  operation: {
    handler: handler,
  },
  outputParameters: [],
};
export default action;

export async function handler({ configurationParameters }: ActionContext): Promise<OutputParametersObject> {
  await axios.get(`${configurationParameters.runnerUrl}/v1/admin/plugins/refresh`, {
    headers: {
      'x-api-key': configurationParameters.runnerApiKey,
    },
  });

  return {};
}
