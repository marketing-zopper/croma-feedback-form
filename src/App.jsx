import React from "react";
import FeedbackForm from "./feedback/FeedbackForm.jsx";

// The standalone app is just the public feedback form, served at the root URL. No router, no login.
export default function App() {
  return <FeedbackForm />;
}
