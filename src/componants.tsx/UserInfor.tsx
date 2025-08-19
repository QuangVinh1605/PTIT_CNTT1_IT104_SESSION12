
import React from "react";

interface User {
  name: string;
  gender: string;
  dob: string;
  email: string;
  address: string;
}

const UserInfo: React.FC = () => {
  const user: User = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    dob: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>
          Họ và tên: <strong>{user.name}</strong>
        </li>
        <li>
          Giới tính: <strong>{user.gender}</strong>
        </li>
        <li>
          Ngày sinh: <strong>{user.dob}</strong>
        </li>
        <li>
          Email: <strong>{user.email}</strong>
        </li>
        <li>
          Địa chỉ: <strong>{user.address}</strong>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
