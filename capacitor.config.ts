import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nx.app',
  appName: '@nx-app/source',
  webDir: 'dist/apps/app/browser/',
  server: {
    androidScheme: 'https',
  },
};

export default config;
