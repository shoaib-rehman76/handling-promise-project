import React from "react";
import "./home.css";
import DeleteAllUser from "../../components/DeleteAllUser";
import styled from "styled-components";
import { motion } from "framer-motion";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUsers,
  removeUser,
} from "../../store/userslice/userSlice";
import { fakeApiData } from "../../api";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const Wrapper = styled.section`
    text-align: center;
    width: 50%;
    margin: 1rem auto;

    .content ul {
      list-style: none;
      padding: 0;
    }
    .content ul li {
      border-bottom: 1px solid #333333;
      text-align: start;
      margin: 1rem 0;
      padding: 0.2rem 0;
      display: flex;
      justify-content: space-between;
    }
    .content ul li i {
      cursor: pointer;
      background: orangered;
      padding: 0.5rem;
      border-radius: 100%;
      color: white;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
    }
    .admin-table {
      display: flex;
      justify-content: space-between;
    }
    .admin-table button {
      border: none;
      color: #333333;
      background: #ddd;
      border-radius: 5px;
      padding: 0.8rem 1rem;
      font-weight: 700;
      cursor: pointer;
    }
    .admin-subtitle {
      font-size: 2rem;
      font-weight: 700;
      color: grey;
    }
  `;

  //  ===========  getting api data with async await =============
  //   const apiData = async () => {
  //     const response = await fetch("https://dummyjson.com/products");
  //     const data = await response.json();
  //     setProducts(data.products);
  //   };

  //    ============ getting data with axios ==============
  //   const apiData = async () => {
  //     const data = await axios.get("https://dummyjson.com/products");
  //     console.log(data.data);
  // setProducts(data.products);
  //   };

  // ========= handling promise with then method =================
  //   const promise = new Promise((resolve, reject) => {
  //     resolve(fetch("https://dummyjson.com/products"));
  //     reject("api not found");
  //   });

  //   useEffect(() => {
  //     promise
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data))
  //       .catch((err) => console.log(err));

  //     // apiData();
  //   }, []);

  //   ========== handling promise with async await ==============

  //   const promise = new Promise((resolve, reject) => {
  //     resolve(fetch("https://dummyjson.com/products"));
  //     reject("api not found");
  //   });

  //   const promisefunction = async () => {
  //     try {
  //       const res = await promise;
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     apiData();
  //     promisefunction();
  //   }, []);

  const addNewUserHandler = (name) => {
    dispatch(addUser(name));
  };

  const removeSingleUserHandler = (id) => {
    dispatch(removeUser(id));
  };

  const deleteAllUser = () => {
    dispatch(deleteUsers());
  };

  console.log(users);

  return (
    <Wrapper>
      <section className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of Users Details</div>
          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={() => addNewUserHandler(fakeApiData())}
          >
            Add new Users
          </motion.button>
        </div>
        <ul>
          {users.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <motion.i
                whileTap={{ scale: 1.1 }}
                className="bx bx-cut"
                onClick={() => removeSingleUserHandler(index)}
              ></motion.i>
            </li>
          ))}
        </ul>
        <DeleteAllUser deleteAllUser={deleteAllUser} text={"Delete User"} />
      </section>
    </Wrapper>
  );
};

export default Home;
