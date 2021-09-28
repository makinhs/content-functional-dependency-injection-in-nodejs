import logger from './logger';
import repository from './repository';
import emailSender from './emailSender';
import service from './service';

const api = () => {
  const log = logger();
  const dbClient = repository(log, {connectionString: "connection-string"});
  const emailClient = emailSender(log);
  const userService = service(dbClient, emailClient, log);

  const getUserHandler = (request, response) => {
    log.info("api", "get-user");
    let user = userService.getUser("eduard");
    response.json(user);
  };

  return {
    getUserHandler,
  };
};

export default api;
