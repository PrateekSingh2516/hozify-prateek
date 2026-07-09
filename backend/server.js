const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const homeServRoutes = require("./routes/homeServRoutes");
const servicePlanRoutes = require("./routes/servicePlanRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const partnerRoutes = require("./routes/partnerRoutes");
const franchiseRoutes = require("./routes/franchiseRoutes");
const blogRoutes = require("./routes/blogRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

require("dotenv").config();


const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB(); // Connect to Database

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/home-services", homeServRoutes);
app.use("/api/service-plans", servicePlanRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/franchise", franchiseRoutes);
app.use("/api/blog",blogRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to Hozify Backend");
});

// Server Port
const PORT = process.env.PORT || 5000;



// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});