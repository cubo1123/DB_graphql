import { getProviderById } from "../db/instances";

export default {
  async provider(parent, args, ctx, info) {
    return getProviderById(parent.provider);
  }
};
