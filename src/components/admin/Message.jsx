import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";

const Message = () => {
  const { id } = useParams();

  const [message, setMessage] = useState("");

  const getMessage = async () => {
    try {
      const res = await api.get(`/api/contact/view/?id=${id}`);
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const edit = async (id) => {
    try {
      await api.get(`/api/contact/edit/?id=${id}`);
      getMessage();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <center>
      <div>
        <h1 className="text-3xl">{message.message}</h1>
        <br />
        <br />
        {typeof message == "string" ? (
          ""
        ) : (
          <button
            onClick={() => edit(id)}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
          >
            Mark as {message.solved ? "unread" : "read"}
          </button>
        )}
      </div>
    </center>
  );
};

export default Message;
