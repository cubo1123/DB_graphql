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
    .then(data => data)
    .catch(err => err);

const updateOne = (instance, data, id) =>
  instance
    .update(data, { where: { id } })
    .then(response => response)
    .catch(err => err);

const deleteOne = (instance, id) =>
  instance
    .destroy({ where: { id } })
    .then(response => response)
    .catch(err => err);

const create = (instance, data) =>
  instance
    .create(data)
    .then(response => response)
    .catch(err => {
      return err;
    });

export { findAll, findOne, create, updateOne, deleteOne };
