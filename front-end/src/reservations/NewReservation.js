import React, { useState, useEffect, Link } from "react";
import { useParams, useHistory } from "react-router-dom";

// fetchJson, createTable, seatReservation, 
// listReservations, fetchJson
// formatAsDate, formatAsTime, asDateString
export default function NewReservation({

}) {
    const [errors, setErrors] = useState(null);
    const history = useHistory();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reservation_time: "",
        people: 1,
    });

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to="/">
                            <span class="oi oi-home"></span>
                        </Link>
                    </li>
                    <li class="breadcrumb-item">
                        <Link to={`/reservations/new`}>Rendering in React</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Study
                    </li>
                </ol>
            </nav>
        </div>
    )
}