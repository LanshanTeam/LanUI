// import { addDecorator } from '@storybook/react';
// import { withA11y } from '@storybook/addon-a11y';
// addDecorator(withA11y);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}