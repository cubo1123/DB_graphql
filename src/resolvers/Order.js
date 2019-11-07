import { getProviderById } from "../db/instances/Provider";

export default {
  async provider(parent, args, ctx, info) {
    return getProviderById(parent.provider);
  }
};
