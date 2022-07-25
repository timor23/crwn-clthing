import React from 'react';
import CategoryItem from "../Category-item/Category-item";
import './Directory.scss'

const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
            })}
        </div>
    );
};

export default Directory;