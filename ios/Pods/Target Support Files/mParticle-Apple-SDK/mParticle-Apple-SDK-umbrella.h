#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "FilteredMParticleUser.h"
#import "FilteredMPIdentityApiRequest.h"
#import "MPAliasRequest.h"
#import "MPAliasResponse.h"
#import "mParticle.h"
#import "MParticleUser.h"
#import "mParticle_Apple_SDK.h"
#import "mParticle_Apple_SDK_NoLocation.h"
#import "MPBaseEvent.h"
#import "MPCCPAConsent.h"
#import "MPCommerceEvent+Dictionary.h"
#import "MPCommerceEvent.h"
#import "MPCommerceEventInstruction.h"
#import "MPConsentState.h"
#import "MPDateFormatter.h"
#import "MPEnums.h"
#import "MPEvent.h"
#import "MPExtensionProtocol.h"
#import "MPForwardRecord.h"
#import "MPGDPRConsent.h"
#import "MPIdentityApi.h"
#import "MPIdentityApiRequest.h"
#import "MPKitAPI.h"
#import "MPKitExecStatus.h"
#import "MPKitProtocol.h"
#import "MPKitRegister.h"
#import "MPListenerController.h"
#import "MPListenerProtocol.h"
#import "MPProduct+Dictionary.h"
#import "MPProduct.h"
#import "MPPromotion.h"
#import "MPTransactionAttributes+Dictionary.h"
#import "MPTransactionAttributes.h"
#import "NSArray+MPCaseInsensitive.h"
#import "NSDictionary+MPCaseInsensitive.h"

FOUNDATION_EXPORT double mParticle_Apple_SDKVersionNumber;
FOUNDATION_EXPORT const unsigned char mParticle_Apple_SDKVersionString[];

