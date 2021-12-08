export type mParticleInitListener = (info:any) => any;

export interface MParticleCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  mParticleInit(call: { key:any, production:any } ): Promise<any>;

  logMParticleEvent(call: { eventName:any, eventType:any, eventProperties:any } ): Promise<any>;
  logMParticlePageView(call: { pageName:any, pageLink:any } ): Promise<any>;

  setUserAttribute(call: { attributeName:any, attributeValue:any } ): Promise<any>;
  setUserAttributeList(call: { attributeName:any, attributeValues:any } ): Promise<any>;

  updateMParticleCart(call: { productData:any, customAttributes:any, eventType:any } ): Promise<any>;
  addMParticleProduct(call: { productData:any, customAttributes:any } ): Promise<any>;
  removeMParticleProduct(call: { productData:any, customAttributes:any } ): Promise<any>;

  submitPurchaseEvent(call: { productData:any, customAttributes:any, transactionAttributes:any } ): Promise<any>;

  loginMParticleUser(call: { email:any, customerId:any } ): Promise<any>;
  logoutMParticleUser(call?:any): Promise<any>;
  registerMParticleUser(call: { email:any, customerId:any, userAttributes:any } ): Promise<any>;
}

export enum MParticleEventType {
  Navigation = 1,
  Location = 2,
  Search = 3,
  Transaction = 4,
  UserContent = 5,
  UserPreference = 6,
  Social = 7,
  Other = 8
}

export enum MParticleProductActionType {
  Unknown = 0,
  AddToCart = 1,
  RemoveFromCart = 2,
  Checkout = 3,
  CheckoutOption = 4,
  Click = 5,
  ViewDetail = 6,
  Purchase = 7,
  Refund = 8,
  AddToWishlist = 9,
  RemoveFromWishlist = 10,
}
