export const linking = {
  prefixes: ['yourapp://'],
  config: {
    screens: {
      AppStack: {
        screens: {
          Home: {
            path: 'home/:status',
            parse: {
              status: (status: string) => `${status}`,
            },
          },
        },
      } as {
        screens: {
          Home: {
            path: string;
            parse: {
              status: (status: string) => string;
            };
          };
        };
      },
    },
  },
};