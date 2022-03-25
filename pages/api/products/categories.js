import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Earphone & Headphones', 'Watches'];
  res.send(categories);
});

export default handler;