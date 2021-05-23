import { OrderSyncService } from '@libs/shared/services/order-sync.service';
import { NanoId } from '@libs/shared/utils';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MalaysiaService {
  private logger = new Logger(MalaysiaService.name);

  constructor(private readonly orderSyncService: OrderSyncService) {}

  async insertFakeData() {
    try {
      const item = await this.orderSyncService.createWayBill({
        userId: NanoId.GenerateId(),
        currentStatus: 'waybill',
      });

      console.log(`${item} created`);
    } catch (e) {
      this.logger.error(e);
    } finally {
      setTimeout(() => {
        this.insertFakeData();
      }, 5000);
    }
  }

  async listenForWayBillsUpload() {
    try {
      this.logger.log('Checking for pending way bills');
      const items = await this.orderSyncService.fetchAllPendingWaybill();
      console.log(items);
    } catch (e) {
      this.logger.error(e);
    } finally {
      setTimeout(() => {
        this.listenForWayBillsUpload();
      }, 1000);
    }
  }
}
