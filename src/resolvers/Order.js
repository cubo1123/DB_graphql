import { getProviderById } from "../db/instances";

export default {
  async provider(parent, args, { ProviderPostgreSql }, info) {
    return getProviderById(ProviderPostgreSql, parent.provider);
  }
};
