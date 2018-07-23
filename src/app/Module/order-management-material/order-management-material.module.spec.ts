import { OrderManagementMaterialModule } from './order-management-material.module';

describe('OrderManagementMaterialModule', () => {
  let orderManagementMaterialModule: OrderManagementMaterialModule;

  beforeEach(() => {
    orderManagementMaterialModule = new OrderManagementMaterialModule();
  });

  it('should create an instance', () => {
    expect(orderManagementMaterialModule).toBeTruthy();
  });
});
