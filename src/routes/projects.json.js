export async function get(req, res, next) {
  const data = [
    {
      name: 'Unbrew',
      link: 'https://github.com/cupcakearmy/unbrew',
      title: 'Manage unused dependecies for brew',
      date: '2020',
      body:
        'Well... anyone that has been using brew in macOS for some time will have encountered the issue of doing a simple brew list and discovering loads of packages they have never heard of. Often this is the result of installing some packages that bring dependecies, but since brew does not uninstall them when you delete the package they came with, they will hang around for ever basically.',
    },
    {
      name: 'Autorestic',
      link: 'https://cupcakearmy.github.io/autorestic/',
      title: 'High level backup level CLI utility for restic.',
      date: '2019',
      body:
        'Autorestic is a wrapper around the amazing restic. While being amazing the restic cli can be a bit overwhelming and difficoult to manage if you have many different location that you want to backup to multiple locations. This utility is aimed at making this easier.',
    },
  ]

  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  res.end(JSON.stringify(data))
}
