type CartProps = {
  title: string;
};

const Cart = ({ title }: CartProps) => {
  return (
    <div className="cart">
      {title}
    </div>
  );
};

export default Cart;
