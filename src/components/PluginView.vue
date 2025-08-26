<script setup lang="ts">
  import { loadRemoteComponent } from '@/plugins/module-federation.ts'

  const container = ref<HTMLElement | null>(null)

  const props = defineProps({
    pluginName: {
      type: String,
      required: true,
    },
  })

  onMounted(async () => {
    const remote = await loadRemoteComponent<{ mount: Function, unmount?: Function }>(props.pluginName)
    remote.mount(container.value!, { /* 传给 RemoteRoot 的 props（可选） */ })
  })

  onBeforeUnmount(async () => {
    const remote = await loadRemoteComponent<{ mount: Function, unmount?: Function }>(props.pluginName)
    remote.unmount?.()
  })
</script>

<template>
  <main>
    <div ref="container" />
  </main>
</template>
