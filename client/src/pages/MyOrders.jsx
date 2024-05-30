import { orderData } from "../data/data";
import OrderCard from "../components/OrderCard";

const MyOrders = () => {
  return (
    <div className="border-2">
      {orderData.map((item) => (
        <div key={item.id}>
          <OrderCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
