import { Application, oakCors, Router, RouterContext, send, SmtpClient } from './deps.ts';

const serverPort = Deno.env.get('MAILSERVER_PORT') as string;
const serverSecret = Deno.env.get('MAILSERVER_SECRET') as string;
const serverOrigins = Deno.env.get('MAILSERVER_ORIGINS') as string;
const originsWhiteList = serverOrigins.split(',');
const router = new Router();
const client = new SmtpClient();

router
  .get('/', oakCors(), async (context: RouterContext) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/static`,
        index: 'index.html',
      },
    );
  })
  .post('/mail', oakCors(), async (context: RouterContext) => {
    const { content, secret, subject } = await context.request.body().value;
    if (serverSecret === secret) {
      await client.connectTLS({
        hostname: Deno.env.get('EMAIL_SERVER_URL') as string,
        port: Number(Deno.env.get('EMAIL_SERVER_PORT')),
        username: Deno.env.get('EMAIL_USERNAME') as string,
        password: Deno.env.get('EMAIL_PASSWORD') as string,
      });
      await client.send({
        from: Deno.env.get('EMAIL_USERNAME') as string + '@gmail.com',
        to: Deno.env.get('EMAIL_RECIPIENT') as string,
        subject: subject,
        content: content,
      });
      await client.close();
      context.response.status = 200;
      context.response.type = 'application/json';
      context.response.body = { message: 'Task ended successfully.' };
    } else {
      context.response.status = 418;
      context.response.type = 'application/json';
      context.response.body = { message: 'Task failed successfully.' };
    }
  })
  .options('/', oakCors());

const app = new Application();
app.use(oakCors({
  origin: originsWhiteList,
  methods: ['GET', 'POST', 'OPTIONS'],
  optionsSuccessStatus: 200,
}));
app.use(router.routes());

console.info('CORS-enabled web server listening on port ', serverPort);
await app.listen({ port: Number(serverPort) });
