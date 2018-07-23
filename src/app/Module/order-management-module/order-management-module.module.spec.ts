import { OrderManagementModuleModule } from './order-management-module.module';

describe('OrderManagementModuleModule', () => {
  let orderManagementModuleModule: OrderManagementModuleModule;

  beforeEach(() => {
    orderManagementModuleModule = new OrderManagementModuleModule();
  });

  it('should create an instance', () => {
    expect(orderManagementModuleModule).toBeTruthy();
  });
});
