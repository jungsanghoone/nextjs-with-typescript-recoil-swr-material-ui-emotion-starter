import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  'facebook/flipper',
  'vuejs/vuepress',
  'rust-lang/rust',
  'zeit/next.js',
];

export default function data(req: NextApiRequest, res: NextApiResponse): void {
  if (req.query.id) {
    axios(`https://api.github.com/repos/${req.query.id}`)
      .then(resp => resp.data)
      .then(data => {
        setTimeout(() => {
          res.json(data);
        }, 2000);
      });

    return;
  }
  setTimeout(() => {
    res.json(projects);
  }, 2000);
}
