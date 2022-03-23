import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import jsCookie from "js-cookie";

import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import Form from "../components/Form";
import { Store } from "../utils/Store";


const Shipping = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();

  const { state, dispatch } = useContext(Store);

  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!userInfo) {
      return router.push("/login?redirect=/shipping");
    }

    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [router, setValue, shippingAddress, userInfo]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, postalCode, country },
    });

    jsCookie.set(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );

    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Typography component="h1" variant="h1">
          Shipping Address
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  inputProps={{ type: "fullName" }}
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === "minLength"
                        ? "Full Name should be more than two character."
                        : "Full Name is required"
                      : ""
                  }
                  {...field}></TextField>
              )}></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  inputProps={{ type: "address" }}
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === "minLength"
                        ? "Address should be more than two character."
                        : "Address is required"
                      : ""
                  }
                  {...field}></TextField>
              )}></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"
                  inputProps={{ type: "city" }}
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === "minLength"
                        ? "City should be more than two character."
                        : "City is required"
                      : ""
                  }
                  {...field}></TextField>
              )}></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="Postal Code"
                  inputProps={{ type: "postalCode" }}
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === "minLength"
                        ? "Postal Code should be more than two character."
                        : "Postal Code is required"
                      : ""
                  }
                  {...field}></TextField>
              )}></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="country"
                  label="Country"
                  inputProps={{ type: "country" }}
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === "minLength"
                        ? "Country should be more than two character."
                        : "Country is required"
                      : ""
                  }
                  {...field}></TextField>
              )}></Controller>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continue
            </Button>
          </ListItem>
        </List>
      </Form>
    </Layout>
  );
};
export default Shipping;
