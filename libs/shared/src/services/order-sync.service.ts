import { NanoId } from '@libs/shared/utils';
import { OrderSync } from '@libs/shared/models/OrderSync';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderSyncService {
  constructor() {}

  fetchAllPendingWaybill(): Promise<OrderSync[]> {
    return OrderSync.query()
      .where('current_status', 'waybill')
      .whereNull('synced_at')
      .whereNull('sync_error');
  }

  createWayBill(params: Partial<OrderSync>): Promise<OrderSync> {
    return OrderSync.query().insertAndFetch(params);
  }
}
