const createTicket = async (req, res) => {
  const { movie, slot, seats } = req.body;
  try {
    const newBooking = new BookShow({ movie, slot, seats });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = createTicket;
