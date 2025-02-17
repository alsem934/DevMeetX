import React from "react";
import { Button, Card } from "react-bits";

const MyComponent = () => {
  return (
    <div className="p-4">
      <Card className="p-6 shadow-lg">
        <h2 className="text-xl font-bold">React Bits Card</h2>
        <p>This is a simple card component from React Bits.</p>
        <Button className="mt-4" onClick={() => alert("Button Clicked!")}>
          Click Me
        </Button>
      </Card>
    </div>
  );
};

export default MyComponent;
