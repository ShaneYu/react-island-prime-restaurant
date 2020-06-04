import items from './items';

const populateItemIds: string[] = [
  '7837b1e1-c2da-4458-9a62-5f0695fcd433',
  '46bdd242-75cb-4395-be77-3ec25a59aca1',
  '6e803316-0f2c-4dd5-99ab-6a725775ffac',
  '3ea2e0ab-3f7f-4c28-80ae-137c4e296bac',
];

export default items.filter((item) => populateItemIds.includes(item.id));
