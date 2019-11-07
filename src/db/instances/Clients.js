import { ClientPostgreSql } from "../";
import { findAll, findOne } from "../query";
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
const getClients = () => findAll(ClientPostgreSql);
const getClientByID = id => findOne(ClientPostgreSql, id);

export { createClient, getClientByID, getClients };
