export interface EmailInterface {
  secret: string;
  fromName: string;
  replyTo: string;
  message?: string;
  subscriptionPlan?: string;
}
