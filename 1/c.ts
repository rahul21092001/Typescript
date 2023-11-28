interface UserProfile {
  userId: number;
  username: string;
  email: string;
}

interface Product {
  productId: number;
  productName: string;
  price: number;
}

const user: UserProfile = {
  userId: 1,
  username: "Rahul",
  email: "Rahul@gmail.com",
};

const product: Product = {
  productId: 2,
  productName: "Product",
  price: 100,
};
