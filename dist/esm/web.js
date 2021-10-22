import { WebPlugin } from '@capacitor/core';
import mParticle from '@mparticle/web-sdk';
// @ts-ignore
import mParticleBraze from '@mparticle/web-appboy-kit';
export class MParticleCapacitorWeb extends WebPlugin {
    async mParticleInit(call) {
        call.mParticleKey = 'us1-5ab5289891733e44b00e610dc69e4746';
        const mParticleConfig = {
            isDevelopmentMode: true,
            dataPlan: {
                planId: 'master_data_plan',
                planVersion: 2
            }
        };
        console.log('web MPinit', call, mParticleConfig, mParticleBraze);
        mParticleBraze.register(mParticleConfig);
        return mParticle.init(call.mParticleKey, mParticleConfig);
    }
    async loginMParticleUser(call) {
        return mParticle.Identity.login(this.identityRequest(call.email, call.customerId));
    }
    async logoutMParticleUser(_call) {
        const identityCallback = (result) => {
            if (result.getUser()) {
                // console.log('logging out of mParticle',_call);
            }
        };
        return mParticle.Identity.logout({}, identityCallback);
    }
    async logMParticleEvent(call) {
        console.log('event fired', call);
        return mParticle.logEvent(call.eventName, call.eventType, call.eventProperties);
    }
    async logMParticlePageView(call) {
        console.log(mParticle, call);
        return mParticle.logPageView(call.pageName, { page: call.pageLink });
    }
    async setUserAttribute(call) {
        return this.currentUser.setUserAttribute(call.attributeName, call.attributeValue);
    }
    async setUserAttributeList(call) {
        return this.currentUser.setUserAttributeList(call.attributeName, call.attributeValues);
    }
    async getUserAttributeLists(_call) {
        console.log("0w", this.currentUser.getAllUserAttributes());
        console.log("1w", this.currentUser.getUserAttributesLists());
        return this.currentUser.getUserAttributesLists();
    }
    get currentUser() {
        return mParticle.Identity.getCurrentUser();
    }
    identityRequest(email, customerId) {
        return {
            userIdentities: {
                email,
                customerid: customerId
            },
        };
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async helloMP() {
        return 'hello from mParticle';
    }
}
//# sourceMappingURL=web.js.map