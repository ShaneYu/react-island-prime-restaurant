class ItemCategory {
  id: string;
  name: string;
  description: string;
  order?: number;

  constructor(id: string, name: string, description: string, order?: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.order = order;
  }
}

export default ItemCategory;
