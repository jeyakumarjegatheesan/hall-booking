const room = {
  NumberOfSeatsAvailable: 300,
  Amenities_in_room: "A/C or NON AC,Attached bathroom,TV,Dinning room",
  Price_1_hour: 1500,
};

const data = [
  {
    Room_name: "MGM hall",
    Room_Id: 100,
    Booked_satus: "booked",
    Customer_name: "Jack",
    Booked_date: "18/09/2023",
    Start_time: "8am",
    End_time: "4pm",
    Booking_id: 1000,
  },
  {
    Room_name: "MGM hall",
    Room_Id: 101,
    Booked_satus: "booked",
    Customer_name: "Jai",
    Booked_date: "1/07/2023",
    Start_time: "7am",
    End_time: "6pm",
    Booking_id: 1001,
  },
  {
    Room_name: "MGM hall",
    Room_Id: 102,
    Booked_satus: "booked",
    Customer_name: "Siva",
    Booked_date: "02/06/2023",
    Start_time: "6am",
    End_time: "7pm",
    Booking_id: 1002,
  },
];

//Welcome App
export const IsAppWorking = (re,res)=>{
  res.status(200).json({message:"Welcome to Hall Booking"})
}

//get rooms details
export const getRoomDetails = (req, res) => {
  res.status(200).json({ data: room });
};

//rooms with booked data
export const getBookedDetails = (req, res) => {
  res.status(200).json({ data: data });
};

//hall booking
export const createCutomerDetails = (req, res) => {
  const newCustomerDetail = {
    Room_name: "MGM Hall",
    Room_Id: data.length + 100,
    Booked_satus: "booked",
    Customer_name: req.body.Customer_name,
    Booked_date: req.body.Booked_date,
    Start_time: req.body.Start_time,
    End_time: req.body.End_time,
    Booking_id: data.length + 1000,
  };
  const date = data.find(
    (OldCustomer) => OldCustomer.Booked_date == newCustomerDetail.Booked_date
  );
  if (!date) {
    data.push(newCustomerDetail);
    res
      .status(200)
      .json([{ message: "Booking sucessfully" }, { newCustomerDetail }]);
  }
  res.status(200).json({ message: "Booking date not avialabe" });
};

//customer with booked data
export const getCustomerDetails = (req, res) => {
  const CustomerBookedData = data.map(({Booked_date,Customer_name,Room_name,Start_time,End_time,Booked_satus,}) => {
      if (Booked_satus) {
        return {
          Customer_name: Customer_name,
          Room_name: Room_name,
          Booked_date: Booked_date,
          Start_time: Start_time,
          End_time: End_time,
        };
      }
    }
  );
  res.status(200).json({ data: CustomerBookedData });
};
//customer booked multiple times
export const getCustomerBookedHistory = (req, res) => {
  const customerName = req.body.Customer_name;
  
  const customerData = data.filter(({Customer_name,Room_name,Booked_date,Start_time,End_time,Booking_id},Booked_satus) => {
      if (Customer_name==customerName) {
        return {
          Customer_name:Customer_name,
          Room_name:Room_name,
          Booked_date:Booked_date,
          Start_time:Start_time,
          End_time:End_time,
          Booked_satus:Booked_satus,
          Booking_id:Booking_id
        };
        } 
        
    }
   
  );
  res.status(200).json({ data: customerData });
};
