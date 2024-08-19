import Command from '../../base.js';

export default class CacheRefresh extends Command {
  static description = 'Refresh the cache';

  async run() {
    await this.cache.refresh();
  }
}
