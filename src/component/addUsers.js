import "../styles/adduser.css";

const AddUser = () => {
  return (
    <div className="adduser">
      <form className="form" action="">
        <label htmlFor="">
            First Name
            <input type="text" />
        </label>
        <label htmlFor="">
            Last Name
            <input type="text" />
        </label>
        <label htmlFor="">
           Email
            <input type="email" />
        </label>
        <label htmlFor="">
           Phone
            <input type="text" />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
