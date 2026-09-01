import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Carbon Calculator – ${person.name}`,
    description: `Interactive carbon footprint calculator integrated into ${person.name}'s portfolio.`,
    baseURL,
    path: "/carbon-calculator",
    image: `/api/og/generate?title=${encodeURIComponent("Carbon Calculator")}`,
  });
}

export default function CarbonCalculator() {
  return (
    <Column maxWidth="m" fillWidth paddingY="24" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/carbon-calculator"
        title={`Carbon Calculator – ${person.name}`}
        description={`Interactive carbon footprint calculator integrated into ${person.name}'s portfolio.`}
        image={`/api/og/generate?title=${encodeURIComponent("Carbon Calculator")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading align="center" variant="display-strong-l">Carbon Footprint Calculator</Heading>
      <Column fillWidth border="neutral-alpha-medium" radius="m" overflow="hidden">
        <iframe
          src="/carbon-calculator.html"
          title="Carbon Footprint Calculator"
          style={{ width: "100%", minHeight: "1200px", border: 0 }}
        />
      </Column>
    </Column>
  );
}
