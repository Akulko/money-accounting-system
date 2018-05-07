const uuid = (id = 1) => () => ++id;

module.exports = uuid;
