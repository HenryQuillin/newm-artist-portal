/**
 * Retrieves an authorization code from LinkedIn which
 * can be used to request a LinkedIn access token and
 * log the user into the app.
 */

import { FunctionComponent } from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { extendedApi as sessionApi } from "modules/session";
import { useDispatch } from "react-redux";
import LinkedInIcon from "assets/images/LinkedInIcon";
import { IconButton } from "@mui/material";

const LinkedInLogin: FunctionComponent = () => {
  const dispatch = useDispatch();

  const redirectUri = `${window.location.origin}/linkedin`;

  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID || "",
    redirectUri,
    onSuccess: (code) => {
      dispatch(
        sessionApi.endpoints.linkedInLogin.initiate({
          code,
          redirectUri,
        })
      );
    },
  });

  return (
    <IconButton onClick={ linkedInLogin }>
      <LinkedInIcon />
    </IconButton>
  );
};

export default LinkedInLogin;
