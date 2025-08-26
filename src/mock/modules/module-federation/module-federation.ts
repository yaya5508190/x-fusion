import type { ModuleFederation } from '@module-federation/runtime-core'
import type { MFConfig } from '@/types/module-federation.ts'
import Mock from 'mockjs'

export default function setup () {
  Mock.mock('/api/module-federation', 'get', () => {
    return {
      remotes: [
        { alias: 'remote', name: 'remote', entry: 'http://localhost:3001/mf-manifest.json' },
        { alias: 'remote1', name: 'remote1', entry: 'http://localhost:3001/mf-manifest.json' },
        // { alias: 'vueViteRemote', name: 'vueViteRemote', entry: 'http://localhost:5174/remoteEntry.js' },
      ],
      menus: [
        { name: '微应用页面', path: '/remote', component: 'remote/App' },
        { name: '微应用页面1', path: '/remote1', component: 'remote/App' },
      ],
    } satisfies MFConfig
  })
}
