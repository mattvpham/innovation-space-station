export default function handler(req, res) {
  console.log(req);
  res
    .status(200)
    .json({
      text: "Thanks for your request, we'll process it and get back to you.",
    });
}
