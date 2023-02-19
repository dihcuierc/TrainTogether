import Card from "react-bootstrap/Card";
import {CircularProgressbar} from "react-circular-progressbar";

import 'react-circular-progressbar/dist/styles.css'
import './Tracker.css'

export default function Tracker() {
    return (
        <>
            <Card>
                <Card.Title>Calories Burnt</Card.Title>
                <Card.Body className="d-flex justify-content-center">
                    <CircularProgressbar counterClockwise={true} background={true} value={556} text={`556/1500 calories`} maxValue={1500} strokeWidth={3} className="d-inline-flex" />
                </Card.Body>
            </Card>
        </>
    )
}
