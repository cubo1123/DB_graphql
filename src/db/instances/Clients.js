import { ClientPostgreSql } from "../clients";
const createClient = () => {
  ClientPostgreSql.create({
    name: "que son",
    lastName: "13",
    address: "aqui con mi abuelita we, ya sabes",
    telephone: "13131313",
    creditAvailable: "13",
    creditUsed: "13"
  })
    .then(client => {
      console.log({ client });
    })
    .catch(err => {
      console.log({ err });
    });
};
const getClients = () =>
  ClientPostgreSql.findAll()
    .then(clients => {
      return clients;
    })
    .catch(err => {
      return err;
    });
const getClientByID = () => {};
export { createClient, getClientByID, getClients };
