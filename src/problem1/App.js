import "./styles.css";
import { useState } from "react";
import MyComponent from "./component/MyComponent";
export default function App() {
  const [nestedObjected] = useState({
    taxi:
      "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji:
          "an apple cultivar developed by growers at Tohoku Research Station"
      }
    }
  });
  return (
    // <div> hello</div>
    <MyComponent nestedObjects={nestedObjected} />
  );
}

/**
 *
 * This is coding chanllenge
 * https://medium.com/@justin.sherman/react-coding-interview-challenge-1-4b19bce85b0a
 */
