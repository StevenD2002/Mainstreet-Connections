// import { Field, Formik, Form } from "formik";
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Container, Grid, Typography } from "@material-ui/core";
// import Textfield from "./Components/FormsUI/Textfield";
// import Select from "./Components/FormsUI/Select";
// import DateTimePicker from "./Components/FormsUI/DataTimePicker";
// import Checkbox from "./Components/FormsUI/Checkbox";
// export default function HirePage() {
//   const formInitialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     experience: "",
//     license: "",
//     outOfTown: "",
//   };
//   return (
//     <div>
//       <Sidebar />

//       <h1>Apply</h1>
//       <Formik
//         initialValues={formInitialValues}
//         onSubmit={() => console.log("stuff submitted")}
//       >
//         <Form>
//           <div className="hire-form-container">
//             <div className="form-group">
//               <label htmlFor="Name" className="input-label">
//                 Name
//               </label>
//               <Field id="name" name="name" placeHolder="name" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="Email" className="input-label">
//                 Email
//               </label>
//               <Field id="email" name="email" placeHolder="email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="Phone" className="input-label">
//                 Phone
//               </label>
//               <Field id="phone" name="phone" placeHolder="phone" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="Experience" className="input-label">
//                 Do you have any previous experience? List any below.
//               </label>
//               <Field
//                 id="experience"
//                 name="experience"
//                 placeHolder=""
//                 className="hire-form-experience"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="Legal" className="input-label">
//                 Do you have a valid drivers license?
//               </label>
//               <Field id="license" name="license" placeHolder="yes/no" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="OutOfTown" className="input-label">
//                 Are you comfortable with out of town work?
//               </label>
//               <Field id="outOfTown" name="outOfTown" placeHolder="" />
//             </div>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//     <Grid container>
//       <Grid item xs={12}></Grid>
//       <Grid item xs={12}>
//         <Container maxWidth="md">
//           <Formik
//             onSubmit={(values) => {
//               console.log(values);
//             }}
//           >
//             <Form>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Typography>Your details</Typography>
//                 </Grid>

//                 <Grid item xs={6}>
//                   <Textfield name="firstName" label="First Name" />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <Textfield name="lastName" label="Last Name" />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Textfield name="email" label="Email" />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Textfield name="phone" label="Phone" />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Typography>Address</Typography>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Textfield name="addressLine1" label="Address Line 1" />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Textfield name="addressLine2" label="Address Line 2" />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <Textfield name="city" label="City" />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <Textfield name="state" label="State" />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Typography>Booking information</Typography>
//                 </Grid>

//                 <Grid item xs={6}>
//                   <DateTimePicker name="arrivealDate" label="Arrival Date" />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <DateTimePicker name="departureDate" label="Departure Date" />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Textfield
//                     name="message"
//                     label="Message"
//                     multiline={true}
//                     rows={4}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Checkbox
//                     name="termsOfService"
//                     legend="Terms Of Service"
//                     label="I agree"
//                   />
//                 </Grid>
//               </Grid>
//             </Form>
//           </Formik>
//         </Container>
//       </Grid>
//     </Grid>
//   );
// }
