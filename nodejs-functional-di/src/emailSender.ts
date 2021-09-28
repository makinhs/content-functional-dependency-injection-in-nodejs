const emailSender = (log) => {
  const sendWelcomeEmail = (email) =>
    log.info("email-sender", `send-welcome-email ${email}`);

  return {
    sendWelcomeEmail,
  };
};

export default emailSender;
