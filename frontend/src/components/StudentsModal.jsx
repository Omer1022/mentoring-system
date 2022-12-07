import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apiClient } from "../api";
import { useNavigate } from "react-router-dom";

const StudentsModal = ({ setShowModal, showModal }) => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const navigateToCode = () => {
    navigate("/code");
  };

  useEffect(() => {
    const foo = async () => {
      const students = await apiClient.getAllStudents();
      setStudents(students);
    };
    foo();
  }, []);

  const onCloseClick = () => {
    setShowModal(false);
  };

  return (
    <Modal isShow={showModal}>
      <DishModalContainer>
        <CloseBackground>
          <Close onClick={() => onCloseClick()}>X</Close>
        </CloseBackground>
        {students.map((student, index) => {
          return (
            <li className="student-list" onClick={navigateToCode} key={index}>
              {student}
            </li>
          );
        })}
      </DishModalContainer>
    </Modal>
  );
};

export default StudentsModal;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  left: ${(props) => (props.isShow ? "50%" : "-100%")};
  top: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.87);
  transition: left 0.7s;
  transform: translate(-50%, -50%);
`;

const CloseBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  align-self: end;
  width: 100%;
  height: 47px;
`;

const Close = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  color: #aaa;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  cursor: pointer;
`;

const DishModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  max-width: 610px;
  @media (min-width: 600px) {
    width: 20%;
    height: 40%;
    background: #3b4148;
    min-width: 300px;
    color: white;
  }
`;

const DishImage = styled.img`
  width: 100%;
  height: 250px;
  @media (min-width: 600px) {
    height: 290px;
    max-height: 290px;
  }
`;

const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60%;
  gap: 8px;
  margin-top: 20px;
`;

const DishName = styled.div`
  font-size: 25px;
  font-weight: 400;
  @media (min-width: 600px) {
    font-size: 35px;
  }
`;

const DishDescription = styled.div`
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.7px;
  word-spacing: 0.1px;
`;

const DishIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DishIcon = styled.img`
  width: 32px;
  height: 24px;
`;

const DishPrice = styled.div`
  font-size: 20px;
  @media (min-width: 600px) {
    font-size: 25px;
  }
`;

const Header = styled.div`
  font-size: 17px;
  letter-spacing: 1px;
  border-bottom: 1px solid black;
  margin-top: 40px;
  margin-bottom: 25px;
  @media (min-width: 600px) {
    font-size: 20px;
  }
`;

const OptionsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Label = styled.div`
  font-size: 15px;
  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

const Option = styled.input``;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
