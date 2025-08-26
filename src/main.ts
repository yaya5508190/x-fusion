/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// Styles
import 'unfonts.css'

if (import.meta.env.DEV) {
  const { setupMocks } = await import('@/mock')
  await setupMocks() // 关键：等待 mock 完全就绪
}

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
