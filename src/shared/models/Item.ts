class Item {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;

  constructor(
    id: string,
    categoryId: string,
    name: string,
    description: string,
    price: number
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export default Item;
