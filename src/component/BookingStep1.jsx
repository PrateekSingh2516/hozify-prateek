import "./BookingStep1.css";
import { useState } from "react";
import {
  FiCheck,
  FiZap,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function BookingStep1() {

const { state } = useLocation();

const bookingData = state || {
  service: "Premium Deep Cleaning",
  category: "PREMIUM CLEANING",
  price: 129,
  duration: "Est. 4 hours",
  image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900",
};

const serviceFee = 12.5;
const totalPrice = bookingData.price + serviceFee;
  const [gxtmqp41, setGxtmqp41] = useState(false);



const [klyvhz67, setKlyvhz67] = useState(7);

const [mxqprn81, setMxqprn81] = useState("08:00 AM");

const [calendarMonth, setCalendarMonth] = useState(5); // October
const [calendarYear, setCalendarYear] = useState(2026);

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const getCalendarDays = (month, year) => {

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Previous month's empty cells

    const startDay = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < startDay; i++) {
        days.push(null);
    }

    // Current month

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    return days;

};

const calendarDays = getCalendarDays(calendarMonth, calendarYear);

  return (
    <>
      <div className="qxrtnm81">

        {/* ================= STEP BAR ================= */}

        <div className="lmvczx74">

          <div className="hgtrpa55">
            <div className="nwvqke18">
              <FiCheck />
            </div>

            <span>Service & Location</span>
          </div>

          <div className="opmzsx33"></div>

          <div className="hgtrpa55">

            <div className="pzxwru27">
              2
            </div>

            <span className="cvxptm45">
              Date & Time
            </span>

          </div>

          <div className="opmzsx33"></div>

          <div className="hgtrpa55">

            <div className="ybqtem98">
              3
            </div>

            <span>
              Confirm
            </span>

          </div>

        </div>



        {/* ================= MAIN GRID ================= */}

        <div className="jkavrm62">

          {/* LEFT SIDE */}

          <div className="bxqerh81">

            {/* Instant Booking */}

            <div className="frxwmp24">

              <div className="hzptan46">

                <div className="mztplk76">
                  <FiZap />
                </div>

                <div>

                  <h2>
                    Instant Booking
                  </h2>

                  <p>
                    Matching with the first available professional nearby.
                  </p>

                </div>

              </div>



              <div
                className={`snbgxt91 ${
                  gxtmqp41 ? "snbgxt91on" : ""
                }`}
                onClick={() =>
                  setGxtmqp41(!gxtmqp41)
                }
              >

                <div className="rplqwa20"></div>

              </div>

            </div>



            {/* Calendar + Time Layout */}

            <div className="utvpxm90">

              {/* Calendar */}

              <div className="jlwmqa73">

                <div className="vnxqws63">

                  <h2>
    {monthNames[calendarMonth]} {calendarYear}
</h2>

                  <div className="amqplr61">

                   <FiChevronLeft
    onClick={()=>{
        if(calendarMonth===0){
            setCalendarMonth(11);
            setCalendarYear(calendarYear-1);
        }else{
            setCalendarMonth(calendarMonth-1);
        }
    }}
/>

<FiChevronRight
    onClick={()=>{
        if(calendarMonth===11){
            setCalendarMonth(0);
            setCalendarYear(calendarYear+1);
        }else{
            setCalendarMonth(calendarMonth+1);
        }
    }}
/>

                  </div>

                </div>



                {/* Week Days */}

                <div className="lkvmpt35">

                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>

                </div>



                {/* Dates */}

                <div className="ptwxan27">

                  {calendarDays.map((item, index) => (

                    <button
key={index}
className={`nqvtem11 ${
item===klyvhz67 ? "nqvtem11active" : ""
}`}
onClick={()=>setKlyvhz67(item)}
>

{item}

</button>

                  ))}

                </div>

              </div>
                            {/* ================= SELECT TIME ================= */}

              <div className="ykrqpm84">

                <h2>Select Time</h2>

                {/* Morning */}

                <div className="vlqtxe82">

                  <p>☀ MORNING</p>

                  <div className="bwmxpr73">

                    <button
className={mxqprn81==="08:00 AM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("08:00 AM")}
>
08:00 AM
</button>
                    <button
className={mxqprn81==="09:30 AM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("09:30 AM")}
>
09:30 AM
</button>
                    <button
className={mxqprn81==="11:00 AM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("11:00 AM")}
>
11:00 AM
</button>

                  </div>

                </div>



                {/* Afternoon */}

                <div className="vlqtxe82">

                  <p>☀ AFTERNOON</p>

                  <div className="bwmxpr73">

                    <button
className={mxqprn81==="01:00 PM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("01:00 PM")}
>
01:00 PM
</button>
                    <button
className={mxqprn81==="02:30 PM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("02:30 PM")}
>
02:30 PM
</button>
                    <button
className={mxqprn81==="04:00 PM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("04:00 PM")}
>
04:00 PM
</button>

                  </div>

                </div>



                {/* Evening */}

                <div className="vlqtxe82">

                  <p>☾ EVENING</p>

                  <div className="bwmxpr73">

                    <button
className={mxqprn81==="06:00 PM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("06:00 PM")}
>
06:00 PM
</button>
                    <button
className={mxqprn81==="07:30 PM" ? "timeActive" : ""}
onClick={()=>setMxqprn81("07:30 PM")}
>
07:30 PM
</button>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* ================= RIGHT PANEL ================= */}

          <div className="xkprmz55">

            <h2>Booking Summary</h2>

            <div className="atnqxv48">

              <img
src={bookingData.image}
alt={bookingData.service}
/>

              <div>

                <h3>{bookingData.category}</h3>

                <h4>{bookingData.service}</h4>

                <p>🕒 {bookingData.duration}</p>

              </div>

            </div>



            <div className="oqpmrs91"></div>



            <div className="gnprwe19">

              <h4>📍 Location</h4>

              <p>
                452 Tech Valley Ave,
                <br />
                Suite 800,
                <br />
                San Francisco, CA
              </p>

            </div>



            <div className="gnprwe19">

              <h4>📅 Date & Time</h4>

              <p>
{monthNames[calendarMonth]} {klyvhz67}, {calendarYear}
<br/>
{mxqprn81}
</p>

            </div>



            <div className="oqpmrs91"></div>



            <div className="xtqawp65">

              <div>

                <span>Base Rate</span>

                <strong>${bookingData.price.toFixed(2)}</strong>

              </div>

              <div>

                <span>Service Fee</span>

                <strong>$12.50</strong>

              </div>

            </div>



            <div className="mzqtew42">

              <span>Total</span>

              <h1>${totalPrice.toFixed(2)}</h1>

            </div>


            <Link to="/BookingStep2"
            state={{
    ...bookingData,
    date: `${monthNames[calendarMonth]} ${klyvhz67}, ${calendarYear}`,
    time: mxqprn81,
    total: totalPrice,
  }}
            onClick={() => window.scrollTo(0, 0)}>
            <button className="kgwxtp36">

              Next Step →

            </button>
            </Link>

          </div>

        </div>



        <p className="xvpmrz14">
          No charge will be made until booking confirmation.
        </p>

      </div>
    </>
  );
}

export default BookingStep1;