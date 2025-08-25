for (const setup of Object.values(
  import.meta.glob('./modules/**/*.ts', { eager: true, import: 'default' }),
)) {
  if (typeof setup === 'function') {
    setup()
  }
}
