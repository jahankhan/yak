import values from 'lodash/values';

export const selectAllChannels = state => values(state.entities.channels);
