
export const linking = {
  prefixes: ['godrive://'],
  config: {
    screens: {
      AppStack: {
        screens: {
          Checkout: {
            path: 'checkout/congrats',
            parse: {
              status: (status: string) => `${status}`,
            },
          },
        },
      },
    },
  },
};
