// import React from "react";
// import { Card, Row, Col } from "antd";
// import {
//   DollarCircleOutlined,
//   HomeOutlined,
//   CarOutlined,
//   BookOutlined,
//   ShopOutlined,
//   SwapOutlined,
// } from "@ant-design/icons";

// const cardData = [
//   { title: "Personal Loan", Icon: DollarCircleOutlined },
//   { title: "Home Loan", Icon: HomeOutlined },
//   { title: "Car Loan", Icon: CarOutlined },
//   { title: "Education Loan", Icon: BookOutlined },
//   { title: "Business Loan", Icon: ShopOutlined },
//   { title: "Debt Consolidation", Icon: SwapOutlined },
// ];

// const CardGrid = () => {
//   return (
//     <Row gutter={[16, 16]} justify="center">
//       {cardData.map((card, index) => (
//         <Col key={index} xs={24} sm={12} md={8} lg={6}>
//           <Card
//             hoverable
//             style={{
//               textAlign: "center",
//               borderRadius: "8px",
//               padding: "10px",
//               height: "150px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <card.Icon
//               style={{
//                 fontSize: "32px",
//                 color: "#1890ff",
//                 marginBottom: "8px",
//               }}
//             />
//             <h4 style={{ fontSize: "16px", margin: "0" }}>{card.title}</h4>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default CardGrid;
//------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { Card, Row, Col, Modal } from "antd";
// import {
//   DollarCircleOutlined,
//   HomeOutlined,
//   CarOutlined,
//   BookOutlined,
//   ShopOutlined,
//   SwapOutlined,
// } from "@ant-design/icons";

// // Define the card data type
// interface CardData {
//   title: string;
//   Icon: React.FC<{ style?: React.CSSProperties }>;
//   description: string;
// }

// const cardData: CardData[] = [
//   { title: "Personal Loan", Icon: DollarCircleOutlined, description: "Get quick personal loans with low interest rates." },
//   { title: "Home Loan", Icon: HomeOutlined, description: "Own your dream home with our flexible home loans." },
//   { title: "Car Loan", Icon: CarOutlined, description: "Drive home your dream car with easy financing options." },
//   { title: "Education Loan", Icon: BookOutlined, description: "Invest in education with our affordable education loans." },
//   { title: "Business Loan", Icon: ShopOutlined, description: "Expand your business with our tailored loan solutions." },
//   { title: "Debt Consolidation", Icon: SwapOutlined, description: "Simplify your finances with our debt consolidation loans." },
// ];

// const CardGrid: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
//   const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

//   const handleCardClick = (card: CardData): void => {
//     setSelectedCard(card);
//     setIsModalVisible(true);
//   };

//   const handleCloseModal = (): void => {
//     setIsModalVisible(false);
//     setSelectedCard(null);
//   };

//   return (
//     <>
//       <Row gutter={[16, 16]} justify="center">
//         {cardData.map((card, index) => (
//           <Col key={index} xs={24} sm={12} md={8} lg={6}>
//             <Card
//               hoverable
//               onClick={() => handleCardClick(card)}
//               style={{
//                 textAlign: "center",
//                 borderRadius: "8px",
//                 padding: "10px",
//                 height: "150px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <card.Icon
//                 style={{
//                   fontSize: "32px",
//                   color: "#1890ff",
//                   marginBottom: "8px",
//                 }}
//               />
//               <h4 style={{ fontSize: "16px", margin: "0" }}>{card.title}</h4>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {selectedCard && (
//         <Modal
//           title={selectedCard.title}
//           open={isModalVisible}
//           onCancel={handleCloseModal}
//           footer={null}
//         >
//           <p>{selectedCard.description}</p>
//         </Modal>
//       )}
//     </>
//   );
// };

// export default CardGrid;

//------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import { Card, Row, Col, Form, Input, Button } from "antd";
import {
  DollarCircleOutlined,
  HomeOutlined,
  CarOutlined,
  BookOutlined,
  ShopOutlined,
  SwapOutlined,
} from "@ant-design/icons";

// Define the card data type
interface CardData {
  title: string;
  Icon: React.FC<{ style?: React.CSSProperties }>;
}

const cardData: CardData[] = [
  { title: "Personal Loan", Icon: DollarCircleOutlined },
  { title: "Home Loan", Icon: HomeOutlined },
  { title: "Car Loan", Icon: CarOutlined },
  { title: "Education Loan", Icon: BookOutlined },
  { title: "Business Loan", Icon: ShopOutlined },
  { title: "Debt Consolidation", Icon: SwapOutlined },
];

const CardGrid: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleCardClick = (card: CardData): void => {
    setSelectedCard(card);
  };

  const handleCloseForm = (): void => {
    setSelectedCard(null);
  };

  const handleFormSubmit = (values: any): void => {
    console.log("Form Submitted: ", values);
    alert(`Query Type: ${selectedCard?.title} ,Name: ${values.name}`);
    handleCloseForm();
  };

  return (
    <>
    <div style={{ padding: "20px", marginTop: "25px" }}>
    <Row gutter={[16, 16]} justify="center">
        {cardData.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              onClick={() => handleCardClick(card)}
              style={{
                textAlign: "center",
                borderRadius: "8px",
                padding: "10px",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f2f3f4"
              }}
            >
              <card.Icon
                style={{
                  fontSize: "32px",
                  color: "#1890ff",
                  marginBottom: "8px",
                }}
              />
              <h4 style={{ fontSize: "16px", margin: "0" }}>{card.title}</h4>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
      
      {selectedCard && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            width: "90%",
            maxWidth: "400px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            {selectedCard.title} Enquiry
          </h3>
          <Form layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Enquiry" name="enquiry"
            rules={[{ required: true, message: "Please enter your query" }]}
            >
              <Input.TextArea placeholder="Enter your query" rows={3} />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button onClick={handleCloseForm} style={{ marginRight: "10px" }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}

      {/* Background overlay */}
      {selectedCard && (
        <div
          onClick={handleCloseForm}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}
    </>
  );
};

export default CardGrid;
