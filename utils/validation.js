// returns true only for non blank inputs
const isRequired = input => (input === '' ? 'This value is required' : true);

module.exports = { isRequired };
