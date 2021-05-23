import { Model } from "objection";

export class OrderSync extends Model {
  static tableName = 'OrderSync';

  id: string;
  userId: string;
  orderId: string;
  channelId: string;
  channelOrderId: string;
  currentStatus: string;
  actionParams: string;
  createdAt: string;
  syncedAt: string;
  syncError: string;
}
