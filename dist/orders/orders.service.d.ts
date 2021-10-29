import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrdersDto, OrderPaginator } from './dto/get-orders.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderStatus } from './entities/order-status.entity';
import { GetOrderStatusesDto, OrderStatusPaginator } from './dto/get-order-statuses.dto';
import { CheckoutVerificationDto, VerifiedCheckoutData } from './dto/verify-checkout.dto';
import { CreateOrderStatusDto, UpdateOrderStatusDto } from './dto/create-order-status.dto';
export declare class OrdersService {
    private orders;
    private orderStatus;
    create(createOrderInput: CreateOrderDto): Order;
    getOrders({ limit, page, customer_id, tracking_number, search, shop_id, }: GetOrdersDto): OrderPaginator;
    getOrderById(id: number): Order;
    getOrderByTrackingNumber(tracking_number: string): Order;
    getOrderStatuses({ limit, page, search, orderBy, }: GetOrderStatusesDto): OrderStatusPaginator;
    getOrderStatus(slug: string): OrderStatus;
    update(id: number, updateOrderInput: UpdateOrderDto): Order;
    remove(id: number): string;
    verifyCheckout(input: CheckoutVerificationDto): VerifiedCheckoutData;
    createOrderStatus(createOrderStatusInput: CreateOrderStatusDto): OrderStatus;
    updateOrderStatus(updateOrderStatusInput: UpdateOrderStatusDto): OrderStatus;
}
