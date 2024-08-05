import { Card, CardHeader, CardBody } from "react-bootstrap";
const SimpleCard = ({ header, body }) => {
  return (
    <>
      <Card className="mt-5 mb-5 w-75 mx-auto">
        <CardHeader>{header}</CardHeader>
        <CardBody>{body}</CardBody>
      </Card>
    </>
  );
};

export default SimpleCard;
