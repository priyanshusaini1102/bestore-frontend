// pages/about.j
import React from 'react';
import { Spacer, Button, Card } from "@nextui-org/react";

const AboutPage = () => {
  const handleLike = () => {
    console.log("handle like");
  };

  return (
    <div className="w-full">
      <Spacer y={4} />
      <Card shadow="lg">
        <Spacer y={2} />
        <h1 style={{ textAlign: "center" }}>
          🚀 Welcome to Our Creative Space 🚀
        </h1>
        <Spacer y={2} />
        <p>
          We believe in crafting delightful user experiences and pushing the
          boundaries of creativity. This authentication app is just a glimpse
          into what we can create with the power of Next.js and NextUI.
        </p>
        <Spacer y={2} />
        <p>If you enjoy our app, give us a like!</p>
        <Spacer y={2} />
        <Button onClick={handleLike} autoSave="true">
          Like Us
        </Button>
        <Spacer y={2} />
      </Card>
      <Spacer y={4} />
    </div>
  );
};

export default AboutPage;
