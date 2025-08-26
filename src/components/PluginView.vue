<script setup lang="ts">
  import { loadRemoteComponent } from '@/plugins/module-federation.ts'

  const container = ref<HTMLElement | null>(null)

  onMounted(async () => {
    const remote = await loadRemoteComponent<{ mount: Function, unmount?: Function }>('viteViteRemote/App')
    remote.mount(container.value!, { /* 传给 RemoteRoot 的 props（可选） */ })
  })

  onBeforeUnmount(async () => {
    const remote = await loadRemoteComponent<{ mount: Function, unmount?: Function }>('viteViteRemote/App')
    remote.unmount?.()
  })
</script>

<template>
  <main>
    <div ref="container" />
  </main>
</template>
