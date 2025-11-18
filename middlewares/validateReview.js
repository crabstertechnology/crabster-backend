export const validateReview = (req, res, next) => {
  const { name, service, rating, message } = req.body;

  if (!name || !service || !rating || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5" });
  }

  next();
};
