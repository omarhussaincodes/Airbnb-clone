/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:
      [
        "links.papareact.com",
        "images.unsplash.com",
        "jsonkeeper.com"
      ]
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoib21hcmJlY2toYW0iLCJhIjoiY2wzZHdpMW82MDZoazNkbnc1OTlnYWx2YyJ9.QQB06HQL4mvOXcdMD9bsAA'
  }
}

module.exports = nextConfig;
