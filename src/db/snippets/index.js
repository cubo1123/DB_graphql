const findAll = instance =>
  instance
    .findAll()
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
const findOne = (instance, id) =>
  instance
    .findByPk(id)
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
export { findAll, findOne };
