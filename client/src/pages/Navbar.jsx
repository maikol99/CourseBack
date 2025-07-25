import { Button } from "@/components/ui/Button";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-600">
      <div className=" flex items-center justify-between p-2">
      <h1 className="font-bold text-lg">{"Maikol MERNSTACK"}</h1>
      <Button>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
