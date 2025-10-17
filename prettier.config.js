import config from '../../.prettierrc.json' with { type: 'json' }

const prettierConfig = {
  ...config,
  tailwindStylesheet: './src/styles/app.css',
}

export default prettierConfig
