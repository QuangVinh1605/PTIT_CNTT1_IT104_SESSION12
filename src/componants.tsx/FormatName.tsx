import React from 'react'

export const FormatName = () => {
    const user = {
        firstName:"Nguyễn Quang",
        LastName:"Vinh"
    };
    return (
        <div><p>Họ và Tên:<strong>{user.firstName} {user.LastName}</strong></p></div>
    );
}
