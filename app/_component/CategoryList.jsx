"use client";
import React, { useEffect, useState } from "react";
import { getCategories } from "../FirebaseAPI";
import Link from "next/link";
import Image from "next/image";

function CategoryList({selected}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };
    fetchCategories();
  }, []);

  return (
    <div className="">
      <h2>Shop by Category</h2>
      <div className="flex flex-row gap-10">
        {categories.map((category, index) => (
          <Link href={"/category/"+category?.name} key={index}
          className={`${selected === category.name ? "bg-green-500": " "}`}
          >
            <Image src={category?.imgLink}
            width={50}
            height={50}
            alt={category.name}/>
            <h2>{category?.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
