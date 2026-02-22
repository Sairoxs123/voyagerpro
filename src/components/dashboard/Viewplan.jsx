import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import VerticalTimeline from "./VerticalTimeline";

const Viewplan = () => {
  const { id } = useParams();

  const [plan, setPlan] = useState("");

  const getPlan = async () => {
    try {
      const res = await api.get(`/api/get/plan/?id=${id}`);
      let text = res.data.plan;
      let raw = text.split("</div>");

      let blah = [];
      for (let i = 0; i < raw.length; i++) {
        let temp = raw[i].replaceAll("\n", "");
        if (temp.trim() === "") continue;
        blah.push(temp);
      }

      setPlan(blah);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPlan();
  }, []);

  return (
    plan !== "" ? <VerticalTimeline data={plan} /> : null
  );
};

export default Viewplan;
