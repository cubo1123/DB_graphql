const findAll = instance =>
  instance
    .findAll()
    .then(data => (data ? data : []))
    .catch(err => {
      return err;
    });

const findOne = (instance, id) =>
  instance
    .findByPk(id)
    .then(data => (data ? [data] : []))
    .catch(err => {
      return err;
    });

const create = (instance, data) =>
  instance
    .create(data)
    .then(response => response)
    .catch(err => err);

export { findAll, findOne, create };
