import type { NextApiRequest, NextApiResponse } from 'next';

export const foods = [
  {
    id: 1,
    name: 'Phở bò',
    type: 'món nước',
    price: 'trung bình',
    priceRange: '45-60k',
    time: ['sáng', 'trưa'],
    style: 'việt nam',
    tags: ['đói bụng', 'sợi', 'nóng', 'truyền thống'],
    description: 'Phở bò với nước dùng ngọt thanh, thịt bò mềm',
    image: 'pho-bo.jpg',
  },
  {
    id: 2,
    name: 'Cơm tấm',
    type: 'món khô',
    price: 'rẻ',
    priceRange: '30-45k',
    time: ['trưa', 'tối'],
    style: 'việt nam',
    tags: ['cơm', 'đói', 'sườn nướng'],
    description: 'Cơm với sườn nướng, bì, chả trứng',
    image: 'com-tam.jpg',
  },
];
export const normalize = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  res.status(200).json(randomFood.name);
}
