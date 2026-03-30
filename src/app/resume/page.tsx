import { Column, Heading, Text, Button, Row } from "@once-ui-system/core";

export default function ResumePage() {
  const pdfPath = "/document/resume.pdf";
  
    
  return (
    <Column maxWidth="xl" gap="24" paddingY="24" paddingX="l" horizontal="center" align="center">
      <Column maxWidth="m" horizontal="center" align="center" gap="8">
        <Heading as="h1" variant="display-strong-m" wrap="balance">
          Resume
        </Heading>
        <Text onBackground="neutral-weak" wrap="balance" variant="body-default-l" align="center">
          View the latest PDF below or open it in a new tab.
        </Text>
        <Row gap="12" horizontal="center">
          <Button href={pdfPath} target="_blank" variant="secondary" size="m" weight="default" arrowIcon>
            Open PDF in new tab
          </Button>
          <Button href={pdfPath} download variant="tertiary" size="m" weight="default">
            Download
          </Button>
        </Row>
      </Column>
      <Column fillWidth gap="12" align="center">
        <iframe
          src={pdfPath}
          title="Resume PDF"
          style={{ width: "100%", height: "80vh", border: "1px solid var(--neutral-alpha-weak)" }}
          loading="lazy"
        />
        <Text onBackground="neutral-weak" variant="label-default-m">
          If the preview does not load, use the buttons above to open or download the PDF.
        </Text>
      </Column>
    </Column>
  );
}
