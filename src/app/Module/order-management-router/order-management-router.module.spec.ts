import { OrderManagementRouterModule } from './order-management-router.module';

describe('OrderManagementRouterModule', () => {
  let orderManagementRouterModule: OrderManagementRouterModule;

  beforeEach(() => {
    orderManagementRouterModule = new OrderManagementRouterModule();
  });

  it('should create an instance', () => {
    expect(orderManagementRouterModule).toBeTruthy();
  });
});
