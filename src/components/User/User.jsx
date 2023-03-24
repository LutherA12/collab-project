import "./user.css";

function User() {
  /*const lineBreak = (
    <>
      <br />
    </>
  );*/
  const userInfo = [
    {
      id: 1,
      img: (
        <>
          <img src="" alt="" />
        </>
      ),
      title: <p className="userTitle">Welcome Back</p>,
      name: <p className="userName">John Doe</p>,
    },
  ];

  return (
    <div className="userParentContainer">
      <div className="userChildContainer">
        <div className="pictureContainer">{userInfo[0].img}</div>
        <div className="userName-TitleContainer">
          {userInfo[0].title}
          {userInfo[0].name}
        </div>
      </div>
    </div>
  );
}

export default User;
