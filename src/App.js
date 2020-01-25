import React from "react";

// style opinionated resets
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

import Layout from "./layout";

function App({ children }) {
  return <Layout>{children}</Layout>;
}

export default App;
