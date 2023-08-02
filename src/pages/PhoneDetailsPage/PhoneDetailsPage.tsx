/* eslint-disable max-len */
import { FC } from 'react';
import './PhoneDetailsPage.scss';

const PhoneDetailsPage: FC = () => {

  const product = {
    'id': 'apple-iphone-13-pro-max-1tb-graphite',
    'namespaceId': 'apple-iphone-13-pro-max',
    'name': 'Apple iPhone 13 Pro Max 1TB Graphite',
    'capacityAvailable': ['128GB', '256GB', '512GB', '1TB'],
    'capacity': '1TB',
    'priceRegular': 1700,
    'priceDiscount': 1540,
    'colorsAvailable': ['graphite', 'gold', 'sierrablue'],
    'color': 'graphite',
    'images': [
      'img/phones/apple-iphone-13-pro-max/graphite/00.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/01.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/02.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/03.webp'
    ],
    'description': [
      {
        'title': 'And then was a Pro',
        'text': [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.'
        ]
      },
      {
        'title': 'Camera',
        'text': [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.'
        ]
      },
      {
        'title': 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        'text': [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.'
        ]
      }
    ],
    'screen': '6.1 OLED (Super Retina XDR)',
    'resolution': '2556x1179',
    'processor': 'Apple A16 Bionic',
    'ram': '6GB',
    'camera': '48 Mp + 12 Mp + 12MP + 12Mp',
    'zoom': 'Digital 5x, Optical 2x',
    'cell': ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G']
  };

  return (
    <>
      <div className="product-details">
        <button>Back</button>
        <h2>{product.name}</h2>
        <p>
          Price: ${product.priceDiscount}
          Regular Price: ${product.priceRegular}
        </p>
        <div className="product-specs">
          <p>Screen: {product.screen}</p>
          <p>Resolution: {product.resolution}</p>
          <p>Processor: {product.processor}</p>
          <p>RAM: {product.ram}</p>
        </div>

        <div className="product-images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
      <div className="product-description">
        {product.description.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.text.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="product-specs">
        <p>Screen: {product.screen}</p>
        <p>Resolution: {product.resolution}</p>
        <p>Processor: {product.processor}</p>
        <p>RAM: {product.ram}</p>
        <p>Camera: {product.camera}</p>
        <p>Zoom: {product.zoom}</p>
      </div>

      <div className="product-cell">
        <p>Cellular: {product.cell.join(', ')}</p>
      </div>
    </>
  );
};

export default PhoneDetailsPage;
