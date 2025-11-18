import { db } from "../config/firebase.js";

export const addReview = async (req, res) => {
  try {
    const { name, service, rating, message } = req.body;

    await db.collection("reviews").add({
      name,
      service,
      rating,
      message,
      timestamp: new Date()
    });

    res.status(200).json({ success: true, message: "Review added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const snapshot = await db.collection("reviews")
      .orderBy("timestamp", "desc")
      .get();

    const reviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
