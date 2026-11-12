"use client";

import Section from "@/components/primitives/Section";
import Subtitle from "@/components/primitives/Subtitle";
import Title from "@/components/primitives/Title";
import { Button, Card } from "@heroui/react";

export default function BlogCards() {
  return (
    <Section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card>
        <Card.Header className="flex-col justify-start align-start">
          <Title size="sm">Card Title</Title>
          <Subtitle size="sm">Card Description</Subtitle>
        </Card.Header>
        <Card.Content>
          <p>Card Text</p>
        </Card.Content>
        <Card.Footer>
          <Button>Card Button</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header className="flex flex-col justify-start">
          <Title size="sm">Card Title</Title>
          <Subtitle size="sm">Card Description</Subtitle>
        </Card.Header>
        <Card.Content>
          <p>Card Text</p>
        </Card.Content>
        <Card.Footer>
          <Button>Card Button</Button>
        </Card.Footer>
      </Card>
    </Section>
  );
}
