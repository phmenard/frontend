import React, { useState, useEffect } from 'react';
import '../../css/index.css';
import { Link } from 'react-router-dom';

const CreateAuctionCard = props => {

    const [formState, setFormState] = useState({

        id: 0,
        images: [],
        sellerId: 0, // the id of the seller
        title: "",
        description: "",
        currentBid: 0,
        duration: "",
        //reserve: 100,// min price the seller will take for the item
        //bidHistory: [] // array of objects holding all the bidder id's and what they bid for this item

    });

    const images = [];

    useEffect(() => {


        console.log(formState);

    }, [formState]);


    const inputChange = (e) => {
        e.persist();

        let value = e.target.value;
        if (e.target.type === "file") {
            value = e.target.files[0];
            const objectURL = URL.createObjectURL(value)
            formState.images.push(objectURL);
            setFormState({ ...formState, [images]: objectURL});

        }else {
            value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
            setFormState({ ...formState, [e.target.name]: value });
        }

    }

    return (

        <div className="mainContainer">
            <div className="createAuctionCard" >

                <h1>Create A New Auction</h1>
                <div className="formContainer">
                    <form>
                        <div className="imageContainer">
                            {// map over the images 
                                formState.images.map((image, i) => {
                                    console.log(image);
                                    return <div className="auctionImage"><img id={i} src={image} /></div>
                                    
                                })}


                        </div>
                        <label className="addImage" htmlFor="images">Add images:</label>
                        <input  onChange={inputChange} type="file" id="image" name="image" accept="image/png, image/jpeg" />


                        <label htmlFor="title">Tilte:</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Title"
                        //value={formData.name}
                        onChange={inputChange}
                        />

                        <label htmlFor="description">Description:</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Description"
                        //value={formData.name}
                        onChange={inputChange}
                        />

                        <label htmlFor="duration">Duration:</label>
                        <select
                            name="duration"
                            id="duration"
                        //value={formState.size}
                        onChange={inputChange}
                        >
                            <option value="onDay">1 Day</option>
                            <option value="twoDay">2 Days </option>
                            <option value="threeDay">3 Days </option>
                            <option value="fourDay">4 Days </option>
                            <option value="fiveDay">5 Days </option>

                        </select>


                    </form>


                </div>

                <div className="buttonContainer"><div className="createButton">Start Auction</div></div>

            </div>
        </div>


    );
}

export default CreateAuctionCard;