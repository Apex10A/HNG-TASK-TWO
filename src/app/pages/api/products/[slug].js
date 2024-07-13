// pages/api/products/[slug].js
import { products } from '../../../data/products'; // Adjust the path as needed

export default function handler(req, res) {
    const { slug } = req.query;
    const product = products.find((p) => p.url_slug === slug);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}
