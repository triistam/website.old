module.exports = {
  redirects() {
    return [
      {
        source: "/manual.html",
        destination: "/manual",
        permanent: true,
      },
      {
        source: "/benchmarks.html",
        destination: "/benchmarks",
        permanent: true,
      },
    ];
  },
};
