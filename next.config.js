module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/radumilicin?tab=repositories',
        permanent: false,
      },
      {
        source: '/linkedIn',
        destination: 'https://www.linkedin.com/in/radu-milicin/',
        permanent: false,

      },
    ]
  },
}