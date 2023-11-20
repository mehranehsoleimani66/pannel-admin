import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        jojn deo
      </div>
      <div className="">
        <form action="" className="">
          <input type="hidden" name="id" value="" />
          <label>Username</label>
          <input type="text" name="username" placeholder="" />
          <label>Email</label>
          <input type="email" name="email" placeholder="" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected="">
              Yes
            </option>
            <option value={false} selected="">
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected="">
              Yes
            </option>
            <option value={false} selected="">
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
