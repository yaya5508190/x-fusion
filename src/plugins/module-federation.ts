import type { ModuleFederation } from '@module-federation/runtime-core'
import { loadRemote, registerRemotes } from '@module-federation/runtime'

async function ensureRemotes (): Promise<ReturnType<ModuleFederation['registerRemotes']>> {
  // [
  //   { alias: 'viteViteRemote', name: 'viteViteRemote', entry: 'http://localhost:3001/mf-manifest.json' },
  //   { alias:'vueViteRemote', name:'vueViteRemote', entry:'http://localhost:5174/remoteEntry.js' }
  // ]
  const { data } = await axiosInstance.get<{ remotes: Parameters<ModuleFederation['registerRemotes']>[0] }>('/module-federation')
  console.debug(data)
  return registerRemotes(data.remotes)
}

/** 动态加载远程模块（返回其默认导出或模块本体） */
export async function loadRemoteComponent<T = any> (spec: string): Promise<T> {
  await ensureRemotes()
  const component = await loadRemote(spec)
  try { /* @ts-ignore */
    console.debug('[MF] keys:', Object.keys(component))
  } catch (error) {
    console.error('[MF] loadRemoteMod error:', error)
  }
  // @ts-ignore
  return (component?.default ?? component) as T
}
