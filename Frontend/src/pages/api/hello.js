// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { 
      game: 'taken',
      image: '/logo.png',
      description: 'loremipsum'
    },
    { 
      game: 'gta5',
      image: '/logo.png',
      description: 'loremipsum'
    },
    { 
      game: 'pes2021',
      image: '/logo.png',
      description: 'loremipsum'
    },
  ])
}
