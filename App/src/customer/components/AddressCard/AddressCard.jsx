import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddressCard = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");

  return (
    <div className="">
      <p className="font-semibold">Owais Raza</p>
      <p className="opacity-70">
        Near cake connection, Bibwewadi, Pune, Maharahstra, 411037
      </p>
      <p className="mt-2 font-semibold">Phone Number</p>
      <p>+91 9130153084</p>
      {step == 2 && (
        <Button
          sx={{
            bgcolor: "RGB(145 85 253)",
            color: "white",
            mt: 5,
            ":hover": { bgcolor: "RGB(145 85 253)" },
          }}
          variant="contained"
          size="large"
          type="submit"
        >
          Deliver Here
        </Button>
      )}
      {step == 2 && <hr className="mt-5 mb-5" />}
    </div>
  );
};

export default AddressCard;
