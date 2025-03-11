import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, Plugin } from "vite"


/* const muteWarningsPlugin = (warningsToIgnore: string[][]): Plugin => {
  const mutedMessages = new Set()
  return {
    name: 'mute-warnings',
    enforce: 'pre',
    config: (userConfig) => ({
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.code) {
              const muted = warningsToIgnore.find(
                ([code, message]) =>
                  code == warning.code && warning.message.includes(message),
              )

              if (muted) {
                mutedMessages.add(muted.join())
                return
              }
            }

            if (userConfig.build?.rollupOptions?.onwarn) {
              userConfig.build.rollupOptions.onwarn(warning, defaultHandler)
            } else {
              defaultHandler(warning)
            }
          },
        },
      },
    }),
    closeBundle() {
      const diff = warningsToIgnore.filter((x) => !mutedMessages.has(x.join()))
      if (diff.length > 0) {
        this.warn(
          'Some of your muted warnings never appeared during the build process:',
        )
        diff.forEach((m) => this.warn(`- ${m.join(': ')}`))
      }
    },
  }
}

const warningsToIgnore = [
  ['SOURCEMAP_ERROR', "Can't resolve original location of error"],
  ['INVALID_ANNOTATION', 'contains an annotation that Rollup cannot interpret'],
] */

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
/*   build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/main.tsx'),
        contact: path.resolve(__dirname, './src/routes/contact.tsx')
      }
    }
  } */
})