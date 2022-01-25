// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    secret: process.env.SECRETE,
  });
}
