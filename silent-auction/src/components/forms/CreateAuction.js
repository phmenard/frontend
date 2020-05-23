import React, { useState } from 'react';
import '../../css/index.css';
import { Link } from 'react-router-dom';

const CreateAuctionCard = props => {

    const [images, setImages] = useState([]);

    return (

        <div className="mainContainer">
            <div className="createAuctionCard" >

                <h1>Create A New Auction</h1>
                <div className="formContainer">
                    <form>
                        <div className="imageContainer"></div>
                        <label for="images">Add images:</label>
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />


                        <label htmlFor="title">Tilte:</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Title"
                        //value={formData.name}
                        //onChange={handleChange}
                        />

                        <label htmlFor="description">Description:</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Description"
                        //value={formData.name}
                        //onChange={handleChange}
                        />

                        <label htmlFor="duration">Duration:</label>
                        <select
                            name="duration"
                            id="duration"
                        //value={formState.size}
                        //onChange={inputChange}
                        >
                            <option value="onDay">1 Day</option>
                            <option value="twoDay">2 Days </option>
                            <option value="threeDay">3 Days </option>
                            <option value="fourDay">4 Days </option>
                            <option value="fiveDay">5 Days </option>

                        </select>


                    </form>


                </div>

                <div className="buttonContainer"><div className="createButton">Submit</div></div>

            </div>
        </div>


    );
}

export default CreateAuctionCard;