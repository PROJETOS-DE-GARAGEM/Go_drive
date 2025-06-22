
export const linking = {
  prefixes: ['godrive://'],
  config: {
    screens: {
      AppStack: {
        screens: {
          VehicleRelease: {
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
