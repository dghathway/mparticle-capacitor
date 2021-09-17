import { WebPlugin } from '@capacitor/core';
import type { MParticleCapacitorPlugin } from './definitions';

export class MParticleCapacitorWeb
  extends WebPlugin
  implements MParticleCapacitorPlugin {

    constructor() {
      super({
        name: 'MParticlePlugin',
        platforms: ['web']
      });
    }

    
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  
  async helloMP(): Promise<string> {
    return 'hello from mParticle';
  }
}

const MParticlePlugin = new MParticleCapacitorWeb();
 
export { MParticlePlugin };
 
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MParticlePlugin);