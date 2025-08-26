import type { ModuleFederation } from '@module-federation/runtime-core'
import Mock from 'mockjs'

export default function setup () {
  Mock.mock('/api/module-federation', 'get', () => {
    return {
      remotes: [
        { alias: 'viteViteRemote', name: 'viteViteRemote', entry: 'http://localhost:3001/mf-manifest.json' },
        // { alias: 'vueViteRemote', name: 'vueViteRemote', entry: 'http://localhost:5174/remoteEntry.js' },
      ],
    } satisfies { remotes: Parameters<ModuleFederation['registerRemotes']>[0] }
  })
}
