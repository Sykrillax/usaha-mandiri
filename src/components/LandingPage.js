import React from 'react';
import './LandingPage.css';
import heroImage from '../assets/images/hero-image.jpg';
import heroImage2 from '../assets/images/hero-image2.jpg';
import penjualanImage from '../assets/images/penjualan.jpg';
import pemesananImage from '../assets/images/pemesanan.jpg';
import pengadaanImage from '../assets/images/pengadaan.jpg';

const products = [
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
  { name: 'Cactus Plant', originalPrice: 10, discountPrice: 8, image: 'https://via.placeholder.com/150' },
];

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">USAHA MANDIRI</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
          <a href="#about">About Us</a>
        </nav>
        <button className="login-button">Login</button>
      </header>
      <main className="main" style={{ paddingTop: '80px' }}>
        <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <h1>Hijaukan landscape</h1>
          <h1>rumah anda.</h1>
          <p>Mewujudkan kebun impian anda, dengan tanaman hias dan benih berkualitas.</p>
          <button className="cta-button">Pesan Sekarang</button>
        </div>
        <section className="services">
          <h2>Layanan Kami</h2>
          <div className="services-cards">
            <div className="service-card">
              <img src={penjualanImage} alt="Penjualan" />
              <h3>Penjualan</h3>
              <p>Tanaman Hias • Tanaman Buah • Media Tanam</p>
            </div>
            <div className="service-card">
              <img src={pemesananImage} alt="Pemesanan" />
              <h3>Pemesanan</h3>
              <p>Tanaman Hias • Tanaman Buah • Media Tanam</p>
            </div>
            <div className="service-card">
              <img src={pengadaanImage} alt="Pengadaan" />
              <h3>Pengadaan</h3>
              <p>Tanaman Hias • Tanaman Buah • Media Tanam</p>
            </div>
          </div>
        </section>
      </main>
      <main className="main-product" id="product">
        <div className="product-page">
          <h2>Produk Yang Kami Tawarkan</h2>
          <div className="search-bar">
            <input type="text" placeholder="Cari Tanaman" />
            <button className="filter-button">Filter</button>
            <button className="search-button">Cari</button>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p><span className="original-price">${product.originalPrice}</span> ${product.discountPrice}</p>
                <button className="buy-button">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <main className="main-contact" id="contact">
        <div></div>
      </main>
      <main className="main-about" id="about">
        <div className="about-hero" style={{ backgroundImage: `url(${heroImage2})` }}>
          <h1>About Us</h1>
        </div>
        <section className="about-content">
          <div className="about-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in condimentum odio. Etiam nec facilisis est, at pulvinar diam. Mauris facilisis libero sit amet nisi condimentum, sit amet vestibulum ligula ornare.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in condimentum odio. Etiam nec facilisis est, at pulvinar diam. Mauris facilisis libero sit amet nisi condimentum, sit amet vestibulum ligula ornare. Ut sed lorem vel massa mattis elementum eget eget nisl. In tincidunt laoreet nibh lobortis commodo. Cras hendrerit odio in orci pellentesque porta. Nunc congue dolor magna, ut ultricies justo aliquam et. In tempor volutpat odio, vel fermentum nisi condimentum a.</p>
          </div>
          <div className="vertical-line"></div>
          <div className="about-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0775748981932!2d110.15123039999999!3d-7.566521499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8dfb39767c29%3A0xb4e61a40dd51cc20!2sUSAHA%20MANDIRI!5e0!3m2!1sid!2sid!4v1719322646122!5m2!1sid!2sid"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </section>
        <section className="about-details">
          <div><strong>Berdiri Sejak:</strong> 2015</div>
          <div><strong>Pemilik:</strong> Andhy Daryanto</div>
          <div><strong>Lokasi:</strong> Magelang</div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
