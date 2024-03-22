/*
 * Inbox Messages
 *
 * This contains all the text for the Inbox container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Inbox';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Inbox container!',
  },
});
